<template>
  <div class="container mx-auto py-16">
    <h1 class="text-2xl font-bold font-heading uppercase mb-8">Generate QR Code</h1>
    <div class="new-donation-container flex">
      <div class="w-1/2">      
        <form class="max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-full px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold" for="grid-first-name">
                Hospital
              </label>
              <div class="border-b border-red-500">
                <input class="appearance-none block w-full bg-transparent text-gray-700 border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" v-model="hospital">
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold" for="grid-first-name">
                DATE
              </label>
              <div class="border-b border-red-500">
                <input class="appearance-none block w-full bg-transparent text-gray-700 border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="date" v-model="date">
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <button class="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" @click.prevent="generateQR()">
                Generate
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="flex w-1/2 justify-center">    
        <client-only placeholder="Loading...">
          <qr-code :text="tuturu"></qr-code>
        </client-only>     
       </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {
      'qr-code': () => import('@/node_modules/vue-qrcode-component')
  },
  data() {
    return {
      hospital:'',
      date:'',
      tuturu:''
    }
  },
  methods:{
    generateQR(){
        this.tuturu = '{ "hospital":"'+this.hospital+'", "date":"'+this.date+'"}'
        var x = JSON.parse(this.tuturu)
        console.log(x)
    }
  },
}
</script>
