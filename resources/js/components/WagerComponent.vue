<template>
  <div class="row">
      <div class="box bet-box col-sm">
        <br>
        <div class="row">
          <button class="chip chip5" @click.prevent="placeBet(5)">5</button>
          <button class="chip chip25" @click.prevent="placeBet(25)">25</button>
          <button class="chip chip50" @click.prevent="placeBet(50)">50</button>
          <button class="chip chip100" @click.prevent="placeBet(100)">100</button>
        </div>
        <br>
        <div>Bet: {{ bet }}</div>
        <br>
        <div>Bank: {{ bank }}</div>
        <div class="row">
          <button class="clear-button" @click="clearBet">CLEAR BET</button>
        </div>
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
      placeBet(amt) {
        this.$store.dispatch('increaseBet', amt)
      },
      clearBet() {
        this.$store.dispatch('clearBet');
      }

    },

    computed: {
      bet() {
        return this.$store.state.bet;
      },

      bank() {
        return this.$store.state.bank;
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

  .chip {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    color: white;
    line-height: 3rem;
  }

  .chip5 {
    background: red;
  }

  .chip25 {
    background: blue;
  }

  .chip50 {
    background: green;
  }

  .chip100 {
    background: black;
  }

  .clear-button {
    width: 200px;
    height: 2rem;
    border: 1px solid black;
    margin: 2rem auto;
  }



</style>
