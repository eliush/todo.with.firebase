import Vue from 'vue'
import Vuex from 'vuex'
import {namesRef} from '../firebase'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        name: namesRef,
    },
    mutations:{
        submit(state,todo){
            state.name.push({
                name: todo.name,
                edit: false
            })
        },
        edit(state,key){
            state.name.child(key).update({edit : true});
        },
        removeName(state,key){
            state.name.child(key).remove();
        },
        doneEdit(state,person){
            const key = person['.key'];
            state.name.child(key).update({name : person.name, edit: false});
        }
    }
});