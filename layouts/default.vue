<template>
  <div class="font-sans text-black antialiased" id="app">
    <div class="min-h-screen bg-red-500" v-if="$store.state.isLogin == false">
        <Nuxt />
    </div>
    <div v-else>      
      <Navbar></Navbar>
      <div class="min-h-screen md:flex">
        <div class="hidden sm:flex flex-col sm:flex-row sm:justify-around">
          <Sidebar></Sidebar>
        </div>
        <div class="flex-1 bg-gray-200">
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

export default {
  components:{
    Navbar,
    Sidebar,
  },
  mounted() {
/*     this.$axios.post('oauth/token', {
          'grant_type': 'client_credentials',
          'client_id':'3',
          'client_secret':'52sMshFpnahSUVCNsiweMRW3MJwikI1DJmcecSMV'
    }).then(res=>{
      console.log(res)
    }) */
  },
}
</script>