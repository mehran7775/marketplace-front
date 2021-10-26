export default function(context){
    if(context.store.state.stores.status === "deactive"){
        // contex.$route.replace('/')
        context.redirect('/');
    }
}