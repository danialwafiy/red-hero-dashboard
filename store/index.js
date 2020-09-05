export const state = () => ({
    isLogin: false,
    user:{
        email: null
    }
})

export const getter = {}

export const mutations = {
    setLogin(state) {
        state.isLogin = true
    },
    setUser(state,data){
        state.user.email = data
    },
    removeUser(state){
        state.user.email = null
    },
    removeLogin(state){
        state.isLogin = false
    }
}

export const actions = {
    logout(context){
        return new Promise((resolve,reject)=>{
            this.$axios.get('/logout') 
            .then(res => {
                context.commit('removeLogin')
                context.commit('removeUser')
                resolve(res)
            })
            .catch(error =>{
                console.log(error)
                reject(error)
            }) 
        })
    },
    login(context,credentials){
        return new Promise((resolve,reject)=>{
            this.$axios.get('/sanctum/csrf-cookie', {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                withCredentials: true,
            }) 
            .then(res => {
                this.$axios.post('/login', {
                    email: credentials.email,
                    password: credentials.password,
                })
                .then(res=>{
                    context.commit('setLogin')
                    context.commit('setUser',credentials.email)
                    resolve(res)
                })
                .catch(error =>{
                    console.log(error)
                    reject(error)
                })          
            })
            .catch(error =>{
                console.log(error)
                reject(error)
            }) 
        })
    }
}
