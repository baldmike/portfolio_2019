<template>
    <b-container>
        
        <b-form-group id="imageGroup" label-for="animalImage">
            <b-form-file
                id="animalImage"
                accept="image/*"
                v-model="form1.image"
                placeholder="Choose an image..."
                @change="onImageChange"/>

            <b-col cols="6" offset="3" style="margin-top: 1rem;">
                <img v-if="url" :src="url" width="100" alt="uploaded image">
            </b-col>
        </b-form-group>
        
        <b-row>
            <b-col sm="2" offset="1">
                <label>Name:</label>
            </b-col>
            <b-col sm="9">
                <b-form-input 
                        type="text" 
                        v-model="$v.form1.name.$model"
                        :state="!$v.form1.name.$invalid"
                        aria-describedby="name-live-feedback"></b-form-input>
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="2" offset="1">
                <label>Species:</label>
            </b-col>
            <b-col sm="9">
                <b-form-input 
                        type="text" 
                        v-model="$v.form1.species.$model"
                        :state="!$v.form1.species.$invalid"
                        aria-describedby="species-live-feedback"></b-form-input>
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="2" offset="1">
                <label>Status:</label>
            </b-col>
            <b-col sm="9">
                <b-form-select :state="!$v.form1.status.$invalid" v-model="form1.status" :options="statusOptions">
                    <template slot="first">
                        <option :value="null" disabled>-- Please select an option --</option>
                    </template>
                </b-form-select>
                
            
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="2" offset="1">
                <label>Weight:</label>
            </b-col>
            <b-col sm="9">
                <b-form-input 
                        type="number"
                        v-model="$v.form1.weight.$model"
                        :state="!$v.form1.weight.$invalid"
                        aria-describedby="species-live-feedback"></b-form-input>
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="2" offset="1">
                <label>Date of Birth:</label>
            </b-col>
            <b-col sm="9">
                <b-form-input 
                        type="date"
                        v-model="$v.form1.date_of_birth.$model"
                        :state="!$v.form1.date_of_birth.$invalid"
                        aria-describedby="species-live-feedback"></b-form-input>
            </b-col>
        </b-row>

        <!-- form 2 with everything else - combined in the createAnimal method -->
        <b-row class="my-1" v-for="(value, key) in form2" :key="key">
            <b-col sm="2" offset="1">
                <label>{{ key }}:</label>
            </b-col>
            <b-col sm="9">
                <b-form-input type="text" v-model="form2[key]"></b-form-input>
            </b-col> 
        </b-row>

        <b-button @click='createAnimal'>Save</b-button>
    </b-container>
</template>

<script>

    import { validationMixin } from "vuelidate";
    import { helpers, required, minLength, maxLength, minValue, maxValue, email, between, sameAs } from "vuelidate/lib/validators";
    import imageCompression from 'browser-image-compression';

    export default {
        data() {
            return {

                form1: {
                    name: '',
                    species: '',
                    weight: '',
                    status: null,
                    date_of_birth: '',
                    image: '',
                },

                form2: {
                
                    exam: '',
                    deworming_1: '',
                    deworming_2: '',
                    fecal_test: '',
                    heartworm_test: '',
                    heartworm_result: '',
                    spay_neuter: '',
                    distemper_1: '',
                    distemper_2: '',
                    distemper_3: '',
                    lepto_1: '',
                    lepto_2: '',
                    bord: '',
                    civ: '',
                    civ_booster: '',
                    rabies: '',
                    rabies_number: '',
                    vet: '',
                    microchip: '',
                    heartworm: '',
                    flea_tick: ''
                },
                
                url: '',

                statusOptions: [
                    { value: 'foster', text: 'Foster' },
                    { value: 'adoption_center', text: 'Adoption center' },
                    { value: 'vet', text: 'Vet/Hospital' },
                    { value: 'adopted', text: 'Adopted' },
                    { value: 'other', text: 'Somewhere else?' }
                ],
            }
        },
        mixins: [
            validationMixin
        ],
         validations: {

            form1: {
                name: {
                    required,
                    minLength: minLength(3)
                },
                species: {
                    required,
                    minLength: minLength(3)
                },
                status: {
                    required,
                    minLength: minLength(3)
                },
                date_of_birth: {
                    required,                    
                },
                weight: {
                    required
                },
            },
        },

        methods: {
            createAnimal() {
                this.$v.form1.$touch();

                if (this.$v.form1.$anyError) {
                    return;
                }

                let formData = new FormData();
                
                Object.keys(this.form1).forEach(key => {
                    formData.append(key, this.form1[key]);
                })
                
                Object.keys(this.form2).forEach(key => {
                    formData.append(key, this.form2[key]);
                })

                axios.post("/api/dogs", formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(({data}) => {
                    
                    
                        
                }).catch((error) => {
                        console.log(error);
                })

                this.$forceUpdate();
                    
            },

            onImageChange(e) {
                // first, get the image
                const imageFile = e.target.files[0];
                
                // compression options
                let options = {
                    maxSizeMB: 1,
                    maxWidthOrHeight: 1920,
                    useWebWorker: true
                }

                
                let self = this;
                
                // compress the image
                imageCompression(imageFile, options).then(compressedFile => {
                    console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                    console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
            
                    // this allows browser preview
                    self.url = URL.createObjectURL(compressedFile);
                

                    self.form1.image = compressedFile;
                })
                .catch(function (error) {

                    console.log(error.message);

                });

            },
        }
    }
</script>

<style>
   .input {
        margin: 10px;
    }
</style>