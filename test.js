function clicar() {

    //função do nome
    var nome = document.querySelector('input#Nome')
    var resposta = document.querySelector('h4#res')
    var name = String(nome.value)

    var resposta1 = document.getElementById('res1')


    //Função da data de nascimento
    const data_de_nascimento = document.querySelector("input#date")
    const dnm = String(data_de_nascimento.value)


    //função do email

    let email = document.querySelector('input#email')
    let eml = String(email.value)

    //Respostas



    if (name == '' || name == 0 && data_de_nascimento > 12 - 12 - 2003) {
        window.alert('Resultado inválido')
        resposta.innerHTML = 'ERRO no resultado'
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    } else {
        resposta1.innerHTML = 'Seus Dados'
        resposta.innerHTML = `${name}  ${dnm}  ${eml}`
        dados = [name, dnm, eml]
        console.log(dados)
    }

}