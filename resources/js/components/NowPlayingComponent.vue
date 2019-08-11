<template>
    <div class="row">
        <div class="now-playing">
            <div class="marquis">{{ nowPlaying }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        nowPlaying() {
            
            if (this.$store.state.winFlag) {
                return "Big Winner!";
            } else if (this.$store.state.loseFlag) {
                return "You Lose!";
            } else if(this.$store.state.comeOut) {
                return "Comin' Out!";
            } else {
                return "Your point is " + this.$store.state.point  
            }
        }   
    }
}

</script>

<style>
    .now-playing {
        height: 10rem;
        width: 100%;
        border: 1px solid black;
        margin: 20px 0;
    }

    .marquis {
        font-size: 6rem;
    }
</style>
