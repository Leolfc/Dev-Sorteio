const primeiroInput = document.getElementById('primaryNumber')
const segundoInput = document.getElementById('secondaryNumber')
const button = document.querySelector('button')
button.addEventListener('click', (event)=>{
    event.preventDefault()
    const gerarNumeroAleatorio =parseInt( Math.floor(Math.random()*primeiroInput.value - segundoInput.value))
    alert(`O numero gerado foi ${gerarNumeroAleatorio}`)
    primeiroInput.value = ''
    segundoInput.value = ''
})

