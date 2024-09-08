const btnEnviar = document.getElementById('btn-enviar')
const inputText = document.querySelectorAll('.input-text')
const span = document.querySelectorAll('.obrigatorio')

btnEnviar.addEventListener('click', () => {
    inputText.forEach(function (input, indice) {
        if (input.value === "") {
            input.classList.remove('valido')
            input.classList.add('erro')
            span[indice].classList.add('campo-obrigatorio')
        } else {
            input.classList.remove('erro')
            input.classList.add('valido')
            span[indice].classList.remove('campo-obrigatorio')
        }
    })

})