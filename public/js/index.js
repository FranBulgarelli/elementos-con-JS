const main = document.querySelector('main')
const h2 = document.querySelector('.subtitulo')
const a = document.getElementById('a')
const p = document.querySelectorAll('p')

const name = prompt('Ingrese su nombre')

if(name){
    h2.innerText += name
} else {
    h2.innerText += 'Invitado'
}

h2.style.textTransform = 'uppercase'

a.style.color = '#E51B3E'

const response = confirm('Desea cambiar el fondo ?')

if(response){
    document.querySelector('body').classList.add('fondo')
}

for ( let i = 0; i < p.length; i++ ) {
    if (i % 2 === 0) {
        p[i].classList.add('destacadoPar')
    } else {
        p[i].classList.add('destacadoImpar')
    }
}

main.style.display = 'block'
