async function getapi(){
    const url = 'https://sheetdb.io/api/v1/7lzpfarr4oh9l'

    const response = await fetch(url)
    console.log(response)

    const data = await response.json()
    console.log(data)

    data.map((item) =>{
        const p = document.createElement('p')
        const h4 = document.createElement('h4')
        const div = document.getElementById('div')
        p.innerText = item.Nome
        h4.innerText = item.Email
        div.appendChild(p)
        div.appendChild(h4)
    })   
}
getapi()
