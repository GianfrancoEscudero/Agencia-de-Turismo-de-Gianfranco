function updateClock() {    //función para el reloj
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    hours = padZero(hours);
    minutes = padZero(minutes);
    seconds = padZero(seconds);

    var timeString = hours + ":" + minutes + ":" + seconds;
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dateString = currentTime.toLocaleDateString('es-ES', options);

    document.getElementById("time").textContent = timeString;
    document.getElementById("fecha").textContent = dateString;

    setTimeout(updateClock, 1000);
}
function padZero(number) {
    return number < 10 ? "0" + number : number;
}

updateClock();

function toggleMenu() {  //función para el boton del menú lateral
    const menu = document.querySelector('.left');
    menu.classList.toggle('show');
}

function toggleMenu() { //función para filtrar por países
    var leftMenu = document.querySelector('.left');
    leftMenu.classList.toggle('show');
}

function filtrarPorPais(pais) {
    var paquetes = document.querySelectorAll('.paquetes article');

    paquetes.forEach(function (paquete) {
        if (pais === 'todos') {
            paquete.style.display = 'block';  // Mostrar todos los paquetes
        } else if (paquete.classList.contains(pais)) {
            paquete.style.display = 'block';  // Mostrar el paquete correspondiente al país
        } else {
            paquete.style.display = 'none';   // Ocultar los paquetes que no coincidan
        }
    });
}

const user = document.getElementById("email") //validacion de datos inicio de sesión
const password = document.getElementById("password")
const form = document.getElementById("formulario")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!regexEmail.test(user.value)) {
        warnings += 'El email del usuario no es valido <br>'
        entrar = true
    }
    if (password.value.length < 8) {
        warnings += 'La contraseña no es valida <br>'
    }
    entrar = true
    if (entrar) {
        parrafo.innerHTML = warnings
    }
    })

    document.addEventListener("DOMContentLoaded", function () { // funcionalidad para el carrusel
        const slides = document.querySelector(".carousel .slides");
        let index = 0;
        const totalSlides = slides.children.length;
    
        function showSlide() {
            index = (index + 1) % totalSlides;
            slides.style.transform = `translateX(-${index * 100}%)`;
        }
    
        setInterval(showSlide, 5000); // Cambia de imagen cada 5 segundos
    });