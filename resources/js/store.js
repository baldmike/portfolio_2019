import Vue from 'vue' 
import Vuex from 'vuex' 

Vue.use(Vuex)

export default new Vuex.Store({ 
    state() {
        return { 
            die1: '1', 
            die2: '2', 
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
        setRoll(state, payload) {
            console.log("PAYLOAD----->");
            console.log(payload);
        },
        rollTheDice(state) {

            state.winFlag = false;
            state.loseFlag = false;
            state.die1 = null;
            state.die2 = null;
            state.rollTotal = null;
            state.message = '';

            state.die1 = Math.floor(Math.random() * 6) + 1;
            state.die2 = Math.floor(Math.random() * 6) + 1;
            state.rollTotal = state.die1 + state.die2;
            
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
            state.message = "Craps! You Lose!"
        }
    },
    actions: { 
        setRoll(context, payload) {
            context.commit('setRoll', payload);
        },

        rollDice(context) {
            context.commit('rollTheDice');
        },
        setPoint(context, payload) {
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
