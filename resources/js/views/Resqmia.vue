<template>
    <div class="body">
        <b-row>
            <b-col cols="12" md="4">
                <b-row>
                    <b-form-checkbox class="ml-auto mr-auto" v-model="filterDogs">Dogs</b-form-checkbox>
                    <b-form-checkbox class="ml-auto mr-auto" v-model="filterCats">Cats</b-form-checkbox>
                </b-row>
            </b-col>
            <b-col cols="12" md="4">
                <div class="my-3">
                    <input class="search-bar" type="text" v-model="search" placeholder="Search By Name">
                </div>
            </b-col>
            <b-col cols="12" md="4">
                <b-row>
                    <b-form-checkbox class="ml-auto mr-auto" v-model="filterAC">AC</b-form-checkbox>
                    <b-form-checkbox class="ml-auto mr-auto" v-model="filterFoster">Foster</b-form-checkbox>
                    <b-form-checkbox class="ml-auto mr-auto" v-model="filterVet">Vet/Hospital</b-form-checkbox>
                    <b-form-checkbox class="ml-auto mr-auto" v-model="filterOther">Adopted</b-form-checkbox>
                </b-row>
            </b-col>
        </b-row>
        <b-row>
            <b-col v-for="(animal, index) in filteredAnimals"
                    :key="index" cols="6" md="4" lg="2">
                <b-card v-if="animal.image" :img-src="'storage/' + animal.image"  @click="showSelectedAnimalModal(animal)" animal="'animal.id'" img-alt="Selected animal image" class="animal-card">
                    <b-btn class="select-button" >{{ animal.name }}</b-btn>
                </b-card>
                <b-card v-else :img-src="'https://source.unsplash.com/random'" fluid-grow img-alt="No Selected animal image" class="animal-card">
                    <b-btn class="select-button" @click="showSelectedAnimalModal(animal)" animal="'animal.id'">{{ animal.name }}</b-btn>
                </b-card>
                
            </b-col>
        </b-row>





        <div>
            <!-- Show Animal Modal Component -->
            <b-modal ref="selectedAnimalModal" :animal="'animal'" ok-only ok-title="Close" ok-variant="dark" no-close-on-backdrop>
                <b-row>
                    <b-col>
                        <h3 class="headline">{{ selectedAnimal.name }}</h3>
                    </b-col>
                </b-row>
                
                
                <b-row class="input">
                    <b-form-file
                        id="animalImage"
                        accept="image/*"
                        v-model="form3.image"
                        placeholder="Choose an image..."
                        @change="onImageChange"/>

                </b-row>
                <b-row class="input">
                    <b-col sm="3">
                        <label>Name:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input 
                                type="text" 
                                v-model="$v.form3.name.$model"
                                :state="!$v.form3.name.$invalid"
                                aria-describedby="name-live-feedback"></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="input">
                    <b-col sm="3">
                        <label>Species:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input 
                                type="text" 
                                v-model="$v.form3.species.$model"
                                :state="!$v.form3.species.$invalid"
                                aria-describedby="species-live-feedback"></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="input">
                    <b-col sm="3">
                        <label>Status:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-select :state="!$v.form3.status.$invalid" v-model="form3.status" :options="statusOptions">
                            <template slot="first">
                                <option :value="null" disabled>-- Please select an option --</option>
                            </template>
                        </b-form-select>
                    
                    </b-col>
                </b-row>

                <b-row class="input">
                    <b-col sm="3">
                        <label>Weight:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input 
                                type="number"
                                v-model="$v.form3.weight.$model"
                                :state="!$v.form3.weight.$invalid"
                                aria-describedby="species-live-feedback"></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="input">
                    <b-col sm="3">
                        <label>Date of Birth:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input 
                                type="date"
                                v-model="$v.form3.date_of_birth.$model"
                                :state="!$v.form3.date_of_birth.$invalid"
                                aria-describedby="species-live-feedback"></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="input" v-for="(value, key) in form4" :key="key">
                    <b-col sm="4">
                        <label>{{ key }}:</label>
                    </b-col>
                    <b-col sm="8">
                        <b-form-input type="text" v-model="form4[key]"></b-form-input>
                    </b-col> 
                </b-row>

                <b-row style="text-align: center;" class="button-row">
                    <b-col>
                        <b-button class="btn" @click='updateAnimal' variant="success">Save</b-button>
                    </b-col>
                    <b-col>
                        <b-button class="btn" @click='deleteAnimal' variant="danger">DELETE</b-button>
                    </b-col>

                    <b-col>
                        <b-button class="btn" @click='printRecord' variant="primary">Print</b-button>
                    </b-col>
                    
                </b-row>
            </b-modal>
        </div>



        <b-container id="printout">
            <b-row>
                <b-col cols="4" offset="4">
                    <b-img src="/alive_logo.jpg" fluid></b-img>
                </b-col>
                
            </b-row>
            
            <br><br><br>

            <b-row>
                <b-col style="text-align:center;">
                    <h1>{{ selectedAnimal.name}}'s Healthcare Checklist</h1>
                </b-col>
            </b-row>

            

            
            



            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Name: </div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;">{{ selectedAnimal.name }}</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div >Species: </div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;">{{ selectedAnimal.species }}</div>
                </b-col>
            </b-row> 

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Weight: </div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;">{{ selectedAnimal.weight }}</div>
                </b-col>
            </b-row> 

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Status: </div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;">{{ selectedAnimal.status }}</div>
                </b-col>
            </b-row> 

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Date of Birth: </div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;">{{ selectedAnimal.date_of_birth }}</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Vet Exam: </div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;" v-if="selectedAnimal.exam !='null'">{{ selectedAnimal.exam }}</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Deworming 1: </div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;" v-if="selectedAnimal.deworming_1 !='null'">{{ selectedAnimal.deworming_1 }}</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Deworming 2: </div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;" v-if="selectedAnimal.deworming_2 !='null'">{{ selectedAnimal.deworming_2 }}</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Fecal Test: </div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;" v-if="selectedAnimal.fecal_test !='null'">{{ selectedAnimal.fecal_test }}</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Heartworm Test: </div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;" v-if="selectedAnimal.heartworm_test !='null'">{{ selectedAnimal.heartworm_test }}</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Heartworm Result: </div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;" v-if="selectedAnimal.heartworm_result !='null'">{{ selectedAnimal.heartworm_result }}</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Spay/Neuter: </div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;" v-if="selectedAnimal.spay_neuter !='null'">{{ selectedAnimal.spay_neuter }}</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Distemper 1</div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;" v-if="selectedAnimal.distemper_1 !='null'">{{ selectedAnimal.distemper_1 }}</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Distemper 2</div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;" v-if="selectedAnimal.distemper_2 !='null'">{{ selectedAnimal.distemper_2 }}</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Distemper 3</div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;" v-if="selectedAnimal.distemper_3 !='null'">{{ selectedAnimal.distemper_3 }}</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Lepto 1</div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;" v-if="selectedAnimal.lepto_1 !='null'">{{ selectedAnimal.lepto_1 }}</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Lepto 2</div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;" v-if="selectedAnimal.lepto_2 !='null'">{{ selectedAnimal.lepto_2 }}</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Bordatella</div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;" v-if="selectedAnimal.bord !='null'">{{ selectedAnimal.bord }}</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>(H3N2) 1</div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;" v-if="selectedAnimal.civ !='null'">{{ selectedAnimal.civ }}</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>(H3N2) 2</div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;" v-if="selectedAnimal.civ_booster !='null'">{{ selectedAnimal.civ_booster }}</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Rabies</div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;" v-if="selectedAnimal.rabies !='null'">{{ selectedAnimal.rabies }}</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Rabies Number</div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;" v-if="selectedAnimal.rabies_number !='null'">{{ selectedAnimal.rabies_number }}</div>
                </b-col>
            </b-row>
            
            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Vet: </div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;" v-if="selectedAnimal.vet !='null'">{{ selectedAnimal.vet }}</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Microchip:  </div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;" v-if="selectedAnimal.microchip !='null'">{{ selectedAnimal.microchip }}</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Heartworm Prev:  </div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;" v-if="selectedAnimal.heartworm !='null'">{{ selectedAnimal.heartworm }}</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="4"  style="border-bottom: 1px solid black; width: 100%; text-align: center; font-size: 1.3rem;">
                    <div>Flea/Tick Prev:  </div>
                </b-col>
                <b-col cols="8">
                    <div style="border-bottom: 1px solid black; width: 100%; text-align: left; font-size: 1.3rem;">{{ selectedAnimal.flea_tick }}</div>
                </b-col>
            </b-row>
                    

            <br><br><br>

            
            <b-row>
                <b-col>
                    <div class="next-steps">FOLLOW UP STEPS</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <div class="next-steps">___Exam to establish care at a vet</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <div class="next-steps">___Register microchip</div>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <div class="next-steps">___Continue monthly preventions</div>
                </b-col>
            </b-row>
                

        
        </b-container>


    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    import { validationMixin } from "vuelidate";
    import { helpers, required, minLength, maxLength, minValue, maxValue, email, between, sameAs } from "vuelidate/lib/validators";
    import imageCompression from 'browser-image-compression';

    export default {
        name: 'animal',
        data() {
            return {

                form3: {
                    name: '',
                    species: '',
                    weight: '',
                    status: '',
                    date_of_birth: '',
                    image: ''
                },

                form4: {
                
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
                
                name: '',
                animal: '',
                search: '',
                selectedAnimal: '',
                filterDogs: false,
                filterCats: false,
                filterAC: false,
                filterFoster: false,
                filterVet: false,
                filterOther: false,
                dogs: [],
                dogId: '',
                output: null,
            }
        },

        mixins: [
            validationMixin
        ],
         validations: {

            form3: {
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

        computed: {
            filteredAnimals() {
                let self=this;
                let results = [];

                let allDogs = this.dogs.filter(animal => animal.status.toLowerCase() != 'adopted');

                if (this.filterDogs) {
                    allDogs = allDogs.filter(animal => animal.species.toLowerCase() === 'dog')
                }

                if (this.filterCats) {
                    allDogs = allDogs.filter(animal => animal.species.toLowerCase() === 'cat')
                }

                if (this.filterAC) {
                    allDogs = allDogs.filter(animal => animal.status.toLowerCase() === 'adoption_center')
                }

                if (this.filterFoster) {
                    allDogs = allDogs.filter(animal => animal.status.toLowerCase() === 'foster')
                }

                if (this.filterVet) {
                    allDogs = allDogs.filter(animal => animal.status.toLowerCase() === 'vet')
                }

                if (this.filterOther) {
                    allDogs = this.dogs.filter(animal => animal.status.toLowerCase() === 'adopted')
                }

                if (this.search) {
                    return allDogs.filter(animal => animal.name.toLowerCase().indexOf(self.search.toLowerCase())>=0);
                }
                

                return allDogs;
                
            },

        ...mapGetters(['isAuthenticated', 'currentUser'])},
        methods: {
            showSelectedAnimalModal (item) {

                this.dogId = item.id;
                this.form3.name = item.name;
                this.form3.species = item.species;
                this.form3.weight = item.weight;
                this.form3.status = item.status;
                this.form3.date_of_birth = item.date_of_birth;
                
                this.form4.exam = item.exam;
                this.form4.deworming_1 = item.deworming_1;
                this.form4.deworming_2 = item.deworming_2;
                this.form4.fecal_test = item.fecal_test;
                this.form4.heartworm_test = item.heartworm_test;
                this.form4.heartworm_result = item.heartworm_result;
                this.form4.spay_neuter = item.spay_neuter;
                this.form4.distemper_1 = item.distemper_1;
                this.form4.distemper_2 = item.distemper_2;
                this.form4.distemper_3 = item.distemper_3;
                this.form4.lepto_1 = item.lepto_1;
                this.form4.lepto_2 = item.lepto_2;
                this.form4.bord = item.bord;
                this.form4.civ = item.civ;
                this.form4.civ_booster = item.civ_booster;
                this.form4.rabies = item.rabies,
                this.form4.rabies_number = item.rabies_number;
                this.form4.vet = item.vet;
                this.form4.microchip = item.microchip;
                this.form4.heartworm = item.heartworm;
                this.form4.flea_tick = item.flea_tick;

                this.selectedAnimal = item;
                this.$refs.selectedAnimalModal.show()
            },
            hideModal () {
                this.$refs.selectedAnimalModal.hide()
            },
            showAll() {
                this.$router.push('animals')
            },
            updateAnimal() {
                this.$v.form3.$touch();
                

                if (this.$v.form3.$anyError) {
                    return;
                }

                let formData = new FormData();

                Object.keys(this.form3).forEach(key => {
                    formData.append(key, this.form3[key]);
                })
                
                Object.keys(this.form4).forEach(key => {
                    formData.append(key, this.form4[key]);
                })

                // allow for PUT/PATCH call
                formData.append('_method', 'PUT');

                // this is actually a PUT call
                axios.post("/api/dogs/" + this.dogId, formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(({data}) => {
                    
                    this.$notify({
                        group: 'notifications',
                        title: 'Success',
                        text: "Success",
                        duration: '6000',
                        type: 'success',
                        width: '100%'
                    });
                        
                }).catch((error) => {
                        console.log(error);
                })

                this.$forceUpdate();

                // get refreshed list of dogs
                axios.get('/api/dogs').then((dogs) => {
                    this.dogs = dogs.data.data;
                })

                this.hideModal();
                    
            },
            deleteAnimal() {
                let conf = confirm('THIS WILL DELETE THIS RESOURCE! ARE YOU SURE?')
                if (!conf) {
                    return;
                }

                let formData = new FormData();

                formData.append('id', this.dogId)
                formData.append('_method', 'DELETE');

                axios.post("/api/dogs/" + this.dogId, formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(({data}) => {
                    
                    this.$notify({
                        group: 'notifications',
                        title: 'Success',
                        text: "Success",
                        duration: '6000',
                        type: 'success',
                        width: '100%'
                    });
                        
                }).catch((error) => {
                        console.log(error);
                })

                this.$forceUpdate();

                // get refreshed list of dogs
                axios.get('/api/dogs').then((dogs) => {
                    this.dogs = dogs.data.data;
                })

                this.hideModal();


                
            },

            onImageChange(e) {
                const imageFile = e.target.files[0];
                

                let options = {
                    maxSizeMB: 1,
                    maxWidthOrHeight: 1920,
                    useWebWorker: true
                }

                let self = this;
                imageCompression(imageFile, options)
                .then(compressedFile => {
                    console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                    console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
            
                    self.url = URL.createObjectURL(compressedFile);
                
                    self.form3.image = compressedFile;
                })
                .catch(function (error) {
                console.log(error.message);
                });

                
            },

            printRecord() {
                this.$htmlToPaper('printout', () => {
                    console.log("printing complete");
                })
            }
        },

        created() {
            axios.get('/api/dogs').then((dogs) => {
                this.dogs = dogs.data.data;
            })
        }
    }
</script>

<style scoped>

    .body {
        padding: 20px;
    }
    .btn {
        text-align: center;
        width: 100%;
    }
    .center {
        text-align: center;
    }
    .search-bar {
        width: 100%;
        text-align: center;
    }
    .select-button {
        width: 100%;
        height: 3rem;
        margin-bottom: 20px;
        font-size: .9rem;
        color: white;
    }
    .filter-button {
        width: 24%;
    }
    .animal-card {
        margin-bottom: 20px;
        padding: .6rem;
    }
    .card-img {
        height: 12rem;
    }

    #printout {
        display: none;
    }

    .headline {
        text-align: center;
    }

    li {
        padding: 10px;
        border-bottom: 1px solid black;
    }

    .button-row {
        margin-top: 100px;
        text-align: center;
    }

    .input {
        margin: 10px;
    }

    

    @media print {
        .box {
           border-bottom: 5px solid black;
        }
    }
</style>
