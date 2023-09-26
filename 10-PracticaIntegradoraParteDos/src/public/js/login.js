const form = document.getElementById('loginForm');
form.addEventListener('submit', evt => {
    evt.preventDefault();
    const data = new FormData(form);
    const obj = {};
    data.forEach((value,key)=>obj[key] = value);
    fetch('/api/session/login',{
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json',
        
        }
    }).then(res => res.json()).then(json => {
            console.log(json);
            console.log(json.body);
            if(json.status === 200){
                console.log('Ok');
            }
        }) /* .then(result=> result.status)
    .then(status=>{
        console.log(status);
        location.assign("/products");
      }); */
    
});

function goToRegister() {
    location.assign = '/register';
}