let form= document.getElementById('formcontainer');

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    let payload ={
        email: document.getElementById('email').ariaValueMax,
        password: document.getElementById('password').ariaValueMax,
    };
    fetch('http:??localhost:5500/user/login',{
        method: 'POST',
        headers: {
            "content-type":'app.json'
        }
    })
})