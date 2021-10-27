export default function(context){
    if(context.store.state.stores.status === "deactive"){
        context.redirect('/');
    }
}