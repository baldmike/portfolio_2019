<template>  
    
    <div class="container-fluid">

        <div class="loader" v-if="this.$store.state.loading"></div>
    
        <router-view/>   

    </div>
</template>

<script>   



    import { mapGetters, mapActions } from 'vuex';
    

    export default {
        name: "MainApp",
        data() {
            return {
                loading: false,
            }
        },
        components: {
            
        },
        methods: {
        
        },
        computed: mapGetters(['isAuthenticated', 'isMonthly', 'isOneTime']),
        
        // methods: mapActions(['login']),
        created() {
    
        },
        mounted() {
       


        }
    }

</script>

<style>
    * {
        margin: 0;
        padding: 0;
        max-width: 100vw;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .credit {
        font-size: .7rem;
        color: white;
        z-index: 100;
        position: absolute;
        bottom: 0;
        right: 10;
    }

    .StripeElement {
        box-sizing: border-box;

        height: 40px;

        padding: 10px 12px;

        border: 1px solid #ccd0d2;
        border-radius: 4px;
        background-color: white;

        box-shadow: inset 0 1px 1px rgba(0, 0, 0,.075);
        -webkit-transition: box-shadow 150ms ease;
        transition: box-shadow 150ms ease;
    }

    .StripeElement--focus {
        box-shadow: 0 1px 3px 0 #cfd7df;
    }

    .StripeElement--invalid {
        border-color: #fa755a;
    }

    .StripeElement--webkit-autofill {
        background-color: #fefde5 !important;
    }

    /* animations and transitions */
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8*/ {
        opacity: 0;
    }

</style>
