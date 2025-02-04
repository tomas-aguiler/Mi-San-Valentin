function mostrarMensaje() {
    alert("¡Sabía que dirías que sí! 💖 Te amo demasiado, mi gordita.");
}

function moverBoton(boton) {
    let x = Math.random() * (window.innerWidth - boton.offsetWidth);
    let y = Math.random() * (window.innerHeight - boton.offsetHeight);
    boton.style.left = `${x}px`;
    boton.style.top = `${y}px`;
}

function cambiarTexto(boton) {
    boton.innerText = "¿Seguro? 😢";
}
