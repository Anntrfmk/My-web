function sendEmail(){
    let params={
        from_name: document.getElementById('fromname').value,
        email: document.getElementById('email').value,
        message:document.getElementById('Message').value,
}

    emailjs.send("service_6ko2ul5","template_2jjwore", params).then(function(res){
        alert('succesful' + res.status);
    })
}