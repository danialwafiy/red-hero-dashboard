export default function({store, redirect}){
    if (process.client) {    
        if (store.state.isLogin == false) {
            return redirect('/login')
        }
    }
}