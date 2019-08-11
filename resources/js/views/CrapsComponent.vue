<template>
  <div id="app">
    <!-- <craps-game/> -->
    <div class="container">
      <div class="row">
        <div class="col-sm black-box">
          <!-- <img src="/images/crapsTable.jpg" alt=""> -->
          <wager-component/>
        </div>
        
        <div class="col-sm black-box">
          <outcome-component/>
        </div>

        <div class="col-sm black-box">
          <dice-component/>
        </div>
        
      </div>
      <div class="row">
        <div class="col-sm black-box">
          <now-playing/>
        </div>
      </div>
    </div>
    
    <a href="https://github.com/baldmike/craps-vue"><button>VIEW CODE</button></a>

  </div>
</template>

<script>
import CrapsGame from './components/CrapsGame.vue'

import WagerComponent from './components/WagerComponent.vue'
import DiceComponent from './components/DiceComponent.vue'
import OutcomeComponent from './components/OutcomeComponent.vue'
import NowPlaying from './components/NowPlayingComponent.vue'

export default {
  name: 'app',
  components: {

    WagerComponent,
    DiceComponent,
    OutcomeComponent,
    NowPlaying
  }
}
</script>

<style>
#app {
  background-image: url('/images/crapsTable.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 100%; 

  /* Center and scale the image nicely */
  background-position: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.black-box {
  background-color: black;
  margin: 20px;
}


</style>
