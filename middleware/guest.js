export default function(context){
  if(context.app.$cookies.get('token-buyer')){
    context.redirect('/panel-customer')
  }
  }