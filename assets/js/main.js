const form = document.querySelector('#formulario')

form.addEventListener('submit', function (event) {
    event.preventDefault()
    const inputPeso = event.target.querySelector('#peso')
    const inputAltura = event.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        setResultado('Peso inválido', false)
        return
    }

    if (!altura) {
        setResultado('Altura inválida', false)
        return
    }

    const imc = getImc(peso, altura)
    const nivelImc = getNivel(imc)

    const mensagem = `Seu IMC é ${imc} (${nivelImc})`

    setResultado(mensagem, true)
})

/*
IMC                 Resultado
Abaixo do peso      Menos que 18,5      
Peso normal         Entre 18,5 e 24,9   
Sobrepeso           Entre 25 e 29       
Entre 30 e 34,9     Obesidade grau 1
Entre 35 e 39,9     Obesidade grau 2
Mais do que 40      Obesidade grau 3
 */

function getNivel(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) return nivel[5]

    if (imc >= 34.9) return nivel[4]

    if (imc >= 29.9) return nivel[3]

    if (imc >= 24.9) return nivel[2]

    if (imc >= 18.5) return nivel[1]

    if (imc < 18.5) return nivel[0]

}

function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

function criaP() {
    const p = document.createElement('p')
    return p
}

function setResultado(mensagem, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''

    const p = criaP()

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = mensagem
    resultado.appendChild(p)
}