<template>
<div class="flex flex-col items-center justify-center min-h-screen leading-loose  bg-red-500">
  <div class="md:p-3 p-5">
    <img src="~/assets/images/logo.png" class="p-0 ml-10">
    <form class="w-full p-10 bg-white rounded shadow-xl" @submit.prevent="login">
      <div class="text-3xl text-gray-800 font-medium text-center mb-8">Login</div>
      <p class="text-red-600 text-center" v-if="errMsg">{{errMsg}}</p>
      <div class="mt-4 border-b border-red-500">
        <label class="block text-sm text-gray-00" for="cus_name">Email</label>
        <input class="w-full py-1 text-gray-700 bg-transparent rounded focus:outline-none" type="email" v-model="email" required>
      </div>
      <div class="mt-4 border-b border-red-500  p-0">
        <label class="block text-sm text-gray-600" for="cus_email">Password</label>
        <input class="w-full py-1 text-gray-700 bg-transparent rounded focus:outline-none" type="password" v-model="password" required>
      </div>
      <div class="mt-8 text-center">
        <button class=" px-4 py-1 text-red-500 font-semibold  tracking-wider border border-red-500 rounded hover:bg-red-500 hover:text-white focus:outline-none" type="submit" :disabled="btnDisabled">Login</button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  auth: false,
  data() {
    return {
      email:'',
      password:'',
      btnDisabled: false,
      errMsg:null
    }
  },
  methods:{
        login(){
          this.errMsg = null
          console.log('login')
          this.btnDisabled = true
          this.$store.dispatch('login', {
            email: this.email,
            password: this.password,
          })
          .then(response => {
            this.btnDisabled = false
            this.$router.push('/')
          })
          .catch(e=>{
            this.btnDisabled = false
            this.errMsg = e.response.data.message
            console.log(e.response.data.messsage)
          }) 
        }
  },
}
</script>
