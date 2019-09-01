<template>
    <h1>hello {{ weatherData }}</h1>
</template>

<script>
export default {
    data() {
        return {
            weatherData: [],
            temp: '',
            lat: '',
            lon: '',
            ampm: 'am'
        }
    },

    methods: {
         getWeather(url) {
            axios.get(url)
                .then(response => {
                this.weatherData = response.data;
                this.temp = Math.floor(((this.weatherData.main.temp) - 273.15) * 9/5 + 32);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        },
        geolocation() {
            navigator.geolocation.getCurrentPosition(position => {
                this.lat = position.coords.latitude;
                this.lon = position.coords.longitude;

                // this.$store.dispatch('getWeather')

                this.getWeather(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&APPID=4184ae2eac1d3a7f63689ed17eb87201`);
            })
        },
    },

    computed: {
        theTime() {
            let today = new Date();
            let hour = today.getHours();
            let minutes = today.getMinutes();

            if (hour > 12) {
                hour -= 12;
                this.ampm = 'pm'
            }

            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            let todayNow = hour + ':' + minutes + this.ampm;
            return todayNow
        }
    },

    created() {
        this.geolocation();
    }
}
</script>