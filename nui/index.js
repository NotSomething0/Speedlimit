window.addEventListener('message', function(event){
    if(event.data.status == true){
        console.log('element should be shown')
    } else if(event.data.status == false){
        console.log('element should be hidden')
    }
});