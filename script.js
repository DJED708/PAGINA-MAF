function aceptar() {
    window.location.href = "collage.html"; // Asegúrate de que collage.html está en la ruta correcta
}

function moverBoton() {
    let boton = document.getElementById("rechazar");
    let mensaje = document.getElementById("mensaje");

    // Mover el botón a una nueva posición aleatoria
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    boton.style.position = "absolute";
    boton.style.left = `${x}px`;
    boton.style.top = `${y}px`;

    // Lista de frases y mini imágenes con rutas relativas
    const frases = [
        "¡ELIJE QUE SI!",
        "¿ESTAS SEGURA?🥺",
        "PIPIPIPI💔",
        "ANDALE POCHOLATO ",
        "POFIIII "
    ];
    
    const imagenes = [
        "imagenes/gato-depresivo-triste.jpg",
        "imagenes/hamster-triste.jpg",
        "imagenes/gato-triste.jpg",
        "imagenes/si.jpg",
        "imagenes/llanto.jpg"
    ];

    // Elegir un mensaje e imagen aleatoria
    let index = Math.floor(Math.random() * frases.length);
    
    // Mostrar el mensaje y la imagen en el div
    mensaje.innerHTML = `
        <p>${frases[index]}</p>
        <img src="${imagenes[index]}" width="125">
    `;
}
