const button=document.querySelector('button');

button.addEventListener('click',()=>{
    Notification.requestPermission().then(per=>{
        //alert(per)
        if(per==='granted'){
            
            new Notification(per,
                {
                    body:"Extra test",
                    data:'hello world',
                    tag:'welcome'
                }
                )
        }
        else{
            new Notification('no permisson')
            console.log('we cannot get notification')
        }
        console.log('per',per)
    })
})