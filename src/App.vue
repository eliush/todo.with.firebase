<template>
  <div id="app">
    <label>Name: </label>
    <input type="text" v-model="name"/>
    <button @click="submit">Add</button>
    <div id="preview">
      <ul>
        <li v-for="person in names" :key="person['.key']">
          <div v-if="!person.edit">
          <p>{{person.name}}</p>
          <button @click="edit(person['.key'])">Edit</button>
          <button @click="removeName(person['.key'])">Remove</button>
          </div>
          <div v-else>
            <input type="text" v-model="person.name">
            <button @click="doneEdit(person)">Done</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {namesRef} from './firebase'

export default {
  name: 'app',
  data () {
    return {
      name: "",
    }
  },
  firebase:{
    names : namesRef
  },
  methods:{
    submit(){
      this.$store.commit('submit',{
        name: this.name,
        //edit: false
      })
    },
    edit(key){
      //this.$store.state.name.child(key).update({edit : true});
      return this.$store.commit('edit',key)
    },
    removeName(key){
      //this.$store.state.name.child(key).remove();
      return this.$store.commit('removeName',key)
    },
    doneEdit(person){
      //const key = person['.key'];
      //this.$store.state.name.child(key).update({name : person.name, edit: false});
      return this.$store.commit('doneEdit',person);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
