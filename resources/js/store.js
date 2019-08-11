import Vue from 'vue' 
import Vuex from 'vuex' 

Vue.use(Vuex)

export default new Vuex.Store({ 
    state() {
        return { 
            die1: 1, 
            die2: 2, 
            rollTotal: null, 
            point: null,
            comeOut: true,
            message: '',
            winFlag: false,
            loseFlag: false,
            bank: 500,
            bet: 0
        }
    },
    getters: { 
    },
    mutations: { 
        rollTheDice(state) {

            state.winFlag = false;
            state.loseFlag = false;
            state.die1 = null;
            state.die2 = null;
            state.rollTotal = null;
            state.message = '';

            setTimeout(function() {
                state.die1 = Math.floor(Math.random() * 6) + 1;
                state.die2 = Math.floor(Math.random() * 6) + 1;
                state.rollTotal = state.die1 + state.die2;

                if( state.comeOut ) {
                
                    
                    if(state.rollTotal===7 || state.rollTotal===11) {
                        state.message = "Winner! Winner!"
                        state.winFlag = true;
                        store.dispatch('winLogic');
    
                    } else if(state.rollTotal===2 || state.rollTotal===3 || state.rollTotal===12) {
                        state.message = "Craps!"
                        state.loseFlag = true;
                        store.dispatch('loseLogic');
                    } else {
                        state.point = state.rollTotal;
                        state.message = "Your point is " + state.point;
                        state.comeOut = false;
                    }
                } else if(state.rollTotal===7) {
                    store.dispatch('loseLogic', "7 Out!");
                } else if (state.rollTotal===state.point) {
                    store.dispatch('winLogic', "You hit your point!");
                } else {
                    store.dispatch('message', "Keep Rollin'!");  
                }
            }, 600);

            
        },
        setThePoint(state, payload) {
            state.point = payload;
            state.comeOut = false;
            state.message = "Your point is " + state.point
        },
        gameOver(state, payload) {
            state.point = null;
            state.comeOut = true;
            state.message = payload;
        },
        message(state, payload) {
            state.message = payload;
        },
        bet(state, payload) {
            if(state.bank >= payload) {
                state.bet += payload;
                state.bank -= payload;
            } else {
                state.message = "You don't have enough cheese, you gotta roll!"
            }
        },
        clearBet(state) {
            state.bank += state.bet;
            state.bet = 0;
        },
        winLogic(state) {
            state.winFlag = true;
            state.bank += state.bet
            state.bank += state.bet
            state.bet = 0;
        },
        loseLogic(state) {
            state.loseFlag = true;
            state.bet = 0;
        }
    },
    actions: { 
        rollDice(context) {
            context.commit('rollTheDice');
        },
        pointLogic(context, payload) {
            context.commit('setThePoint', payload);
        },
        winLogic(context, payload) {
            context.commit('winLogic');
            context.commit('gameOver', payload);
        },
        loseLogic(context, payload) {
            context.commit('loseLogic');
            context.commit('gameOver', payload);
        },
        message(context, payload) {
            context.commit('message', payload);
        },
        increaseBet(context, payload) {
            context.commit('bet', payload);  
        },
        clearBet(context) {
            context.commit('clearBet');
        }
    }
})
