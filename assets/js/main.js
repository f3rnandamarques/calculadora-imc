const form = document.querySelector('#formulario')

form.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('Evento previnido')
})