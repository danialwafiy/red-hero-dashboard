<template>
  <div class="container mx-auto py-16">
    <h1 class="text-2xl font-bold font-heading uppercase mb-8">Dashboard</h1>
    <div class="dashboard-container flex">
        <div class="w-full">
            <div class="bg-white shadow-md p-5 w-64 text-center">
                <h1 class="text-lg text-black font-semibold">Total Donations</h1>
                <div class="text-5xl text-gray-400 font-bold">{{totalDonations}}</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    components: {
    },
    data() {
        return {
            totalDonations:''
        }
    },
    methods:{
        getTotalDonations(){
            this.$axios.get('http://localhost:8000/api/donation/totalDonations').then(res=>{
                this.totalDonations = res.data
                console.log(res)
            })
        }
    },
    mounted(){
        this.getTotalDonations()
    }
}
</script>
