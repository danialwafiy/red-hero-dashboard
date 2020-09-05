<template>
  <div class="container mx-auto py-16">
    <h1 class="text-2xl font-bold font-heading uppercase mb-8">Donations</h1>
    <div class="donation-container flex">
        <table class="text-left w-full bg-white shadow">
        <thead>
            <tr>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Hospital</th>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Date</th>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Donator's Name</th>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Litres Donated</th>
            </tr>
        </thead>
        <tbody>
            <tr class="hover:bg-grey-lighter" v-for="donation in donations" :key="donation.id">
                <td class="py-4 px-6 border-b border-grey-light">{{donation.hospital}}</td>
                <td class="py-4 px-6 border-b border-grey-light">{{donation.date}}</td>
                <td class="py-4 px-6 border-b border-grey-light">{{donation.donor_name}}</td>
                <td class="py-4 px-6 border-b border-grey-light">{{donation.donor_donated_litre}}</td>
            </tr>
        </tbody>
        </table>
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
            donations:''
        }
    },
    methods:{
        allDonations(){
            this.$axios.get('http://localhost:8000/api/donation').then(res=>{
                this.donations = res.data
            })
        }
    },
    mounted(){
        this.allDonations()
    }
}
</script>
