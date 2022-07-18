function clicar() {
    

    var name = document.querySelector('#Nome')

    const nome = name.value

    const data_de_nascimento = document.querySelector("#date").value


    let email = document.getElementById('email')
    const Email = email.value

    
   var sexo = document.getElementById('genero')


    if (nome == '' || nome== '' || data_de_nascimento > 12 - 12 - 2003 || Email == '') 
    {
       

      const time = setTimeout(warningMessage, 1000)

        function warningMessage(){
        var span = document.createElement('span')
        const message = document.createElement('p')
        message.innerText = 'Error' 
        document.body.appendChild(span)
        span.appendChild(message).classList.add('span')

            setTimeout(()=>{
                message.classList.remove('span')
                message.innerText = ''
            },2000)

        }
        

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        
    }
    else{
      window.alert('Success')
      nome ==''
      Email ==''
      data_de_nascimento == ''  
    }
}