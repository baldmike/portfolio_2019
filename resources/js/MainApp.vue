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
    /* animations and transitions */
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8*/ {
        opacity: 0;
    }

</style>
