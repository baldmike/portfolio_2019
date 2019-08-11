<template>
    <div class="row">
      <div class="box outcome-box col-sm">
        
        <div class="result">{{ rollTotal }}</div>
        <hr>
        <div class="result">{{ message }}</div>

      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {

    },
    computed: {
      
        point() {
            return this.$store.state.point;
        },
        message() {
            return this.$store.state.message;
        },
        rollTotal() {
          return this.$store.state.rollTotal;
        }
    }
  }
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
  }

  .box {
    border: 1px solid black;
    height: 50vh;
  }

  .die {
    height: 4rem;
    width: 4rem;
    border: 1px solid black;
    border-radius: 5px;
    background-color: red;
    color: white;
    font-size: 2rem;
    line-height: 3rem;
    margin: 2rem auto;
  }

  .roll-button {
    width: 40%;
    height: 2rem;
    position: absolute;
    bottom: 0;
    left: 30%;
    right: 30%;
    margin: 1rem auto;
  }

  .result {
    margin: 30px;
    font-size: 2rem;
  }

  .point-box {
    width: 40%;
    height: 2rem;
    position: absolute;
    bottom: 0;
    left: 30%;
    right: 30%;
    margin: 1rem auto;
  }


</style>
