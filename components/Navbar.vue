<template>  
    <div class="bg-red-500 font-semibold">
        <div class="flex justify-between items-center px-10 py-5">
            <nuxt-link to="/" class="text-white no-underline hover:text-gray-400">
                <img src="~/assets/images/logo.png" class="h-12">
            </nuxt-link>
            <div class="flex">
                <div class="relative text-left" v-if="$store.state.isLogin == true">
                    <a href="" class="capitalize relative z-10 text-white no-underline hover:text-gray-400 ml-10" @click.prevent="isOpen=!isOpen"><span class=" bg-white rounded-full px-2 py-1 text-black"><fa :icon="['fas','user']"/> </span> {{$store.state.user.email}}</a>
                    <button v-if="isOpen" @click="isOpen=false" tabindex="-1" class="fixed inset-0 bg-black opacity-50 h-full w-full cursor-default"></button>
                    <div class=" absolute right-0 mt-2 w-32 rounded-md shadow-lg" v-if="isOpen">
                        <div class="rounded-md bg-white shadow-xs">
                        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <a href="" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-00 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem" @click.prevent="logout()">Logout</a>
                        </div>
                        </div>
                    </div>
                </div>
                <nuxt-link v-else to="/login" class="text-white no-underline hover:text-gray-400 ml-10">Login</nuxt-link>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            isOpen:false
        }
    },
    methods:{
        logout(){
            this.$router.push('/login')
            this.$store.dispatch('logout')
        }
    },
    created() {
        const handleEscape = (e) => {
            if (e.key === 'Esc' || e.key === 'Escape') {
                this.isOpen = false
            }
        }
        if (process.client) {
            document.addEventListener('keydown', handleEscape)
            this.$once('hook:beforeDestroy', () => {
            document.removeEventListener('keydown', handleEscape)
            })
        }
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