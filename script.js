function aceptar() {
    window.location.href = "collage.html";
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

    // Lista de frases y mini imágenes
    const frases = [
        "¡ELIJE QUE SI!",
        "¿ESTAS SEGURA?🥺",
        "PIPIPIPI💔",
        "ANDALE POCHOLATO ",
        "POFIIII "
    ];
    
    const imagenes = [
        "C:/Users/castr/Documents/san valentin/gato-depresivo-triste.jpg",
        "https://github.com/DJED708/PAGINA-MAF/blob/main/hamster%20triste.jpg",
        "C:/Users/castr/Documents/san valentin/gato trite.jpg",
        "DJED708/PAGINA-MAF/si.jpg",
        "C:/Users/castr/Documents/san valentin/llanto.jpg"
    ];

    // Elegir un mensaje e imagen aleatoria
    let index = Math.floor(Math.random() * frases.length);
    
    // Mostrar el mensaje y la imagen en el div
    mensaje.innerHTML = `
        <p>${frases[index]}</p>
        <img src="${imagenes[index]}" width="125">
    `;
}
