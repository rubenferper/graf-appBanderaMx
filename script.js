// ==========================================
// COLORES INICIALES
// ==========================================

const colorInicialVerde = "#006847";

const colorInicialRojo = "#CE1126";


// ==========================================
// CONVERTIR RGB A HEX
// ==========================================

function rgbToHex(r, g, b) {

    // Convertimos cada número a hexadecimal
    const rojo = Number(r).toString(16).padStart(2, "0");

    const verde = Number(g).toString(16).padStart(2, "0");

    const azul = Number(b).toString(16).padStart(2, "0");


    // Regresamos el color completo
    return "#" + rojo + verde + azul;
}


// ==========================================
// CONVERTIR HEX A RGB
// ==========================================

function hexToRgb(hex) {

    // Quitamos el #
    hex = hex.replace("#", "");


    return {

        r: parseInt(hex.substring(0, 2), 16),

        g: parseInt(hex.substring(2, 4), 16),

        b: parseInt(hex.substring(4, 6), 16)

    };
}


// ==========================================
// ACTUALIZAR COLOR VERDE
// ==========================================

function actualizarVerde() {

    // Obtenemos los valores RGB
    const r = document.getElementById("greenR").value;

    const g = document.getElementById("greenG").value;

    const b = document.getElementById("greenB").value;


    // Creamos el color RGB
    const rgb = `rgb(${r}, ${g}, ${b})`;


    // Convertimos a HEX
    const hex = rgbToHex(r, g, b);


    // Cambiamos el color de la bandera
    document.getElementById("greenFlag").style.backgroundColor = rgb;


    // Actualizamos los números
    document.getElementById("greenRValue").textContent = r;

    document.getElementById("greenGValue").textContent = g;

    document.getElementById("greenBValue").textContent = b;


    // Actualizamos HEX
    document.getElementById("greenHex").textContent =
        hex.toUpperCase();


    // Actualizamos información
    document.getElementById("greenInfo").textContent =
        `RGB(${r}, ${g}, ${b}) | HEX ${hex.toUpperCase()}`;


    // Actualizamos el selector
    document.getElementById("greenPicker").value = hex;
}


// ==========================================
// ACTUALIZAR COLOR ROJO
// ==========================================

function actualizarRojo() {

    // Obtenemos los valores RGB
    const r = document.getElementById("redR").value;

    const g = document.getElementById("redG").value;

    const b = document.getElementById("redB").value;


    // Creamos el color RGB
    const rgb = `rgb(${r}, ${g}, ${b})`;


    // Convertimos a HEX
    const hex = rgbToHex(r, g, b);


    // Cambiamos el color de la bandera
    document.getElementById("redFlag").style.backgroundColor = rgb;


    // Actualizamos los números
    document.getElementById("redRValue").textContent = r;

    document.getElementById("redGValue").textContent = g;

    document.getElementById("redBValue").textContent = b;


    // Actualizamos HEX
    document.getElementById("redHex").textContent =
        hex.toUpperCase();


    // Actualizamos información
    document.getElementById("redInfo").textContent =
        `RGB(${r}, ${g}, ${b}) | HEX ${hex.toUpperCase()}`;


    // Actualizamos el selector
    document.getElementById("redPicker").value = hex;
}


// ==========================================
// CAMBIAR COLOR DESDE SELECTOR VERDE
// ==========================================

document
    .getElementById("greenPicker")
    .addEventListener("input", function () {

        const rgb = hexToRgb(this.value);


        document.getElementById("greenR").value = rgb.r;

        document.getElementById("greenG").value = rgb.g;

        document.getElementById("greenB").value = rgb.b;


        actualizarVerde();

    });


// ==========================================
// CAMBIAR COLOR DESDE SELECTOR ROJO
// ==========================================

document
    .getElementById("redPicker")
    .addEventListener("input", function () {

        const rgb = hexToRgb(this.value);


        document.getElementById("redR").value = rgb.r;

        document.getElementById("redG").value = rgb.g;

        document.getElementById("redB").value = rgb.b;


        actualizarRojo();

    });


// ==========================================
// CONTROLES RGB DEL VERDE
// ==========================================

document
    .getElementById("greenR")
    .addEventListener("input", actualizarVerde);


document
    .getElementById("greenG")
    .addEventListener("input", actualizarVerde);


document
    .getElementById("greenB")
    .addEventListener("input", actualizarVerde);


// ==========================================
// CONTROLES RGB DEL ROJO
// ==========================================

document
    .getElementById("redR")
    .addEventListener("input", actualizarRojo);


document
    .getElementById("redG")
    .addEventListener("input", actualizarRojo);


document
    .getElementById("redB")
    .addEventListener("input", actualizarRojo);


// ==========================================
// INTERCAMBIAR COLORES
// ==========================================

document
    .getElementById("swapButton")
    .addEventListener("click", function () {

        // Guardamos los valores del verde
        const verde = {

            r: document.getElementById("greenR").value,

            g: document.getElementById("greenG").value,

            b: document.getElementById("greenB").value

        };


        // Guardamos los valores del rojo
        const rojo = {

            r: document.getElementById("redR").value,

            g: document.getElementById("redG").value,

            b: document.getElementById("redB").value

        };


        // Ponemos rojo en verde
        document.getElementById("greenR").value = rojo.r;

        document.getElementById("greenG").value = rojo.g;

        document.getElementById("greenB").value = rojo.b;


        // Ponemos verde en rojo
        document.getElementById("redR").value = verde.r;

        document.getElementById("redG").value = verde.g;

        document.getElementById("redB").value = verde.b;


        // Actualizamos ambos
        actualizarVerde();

        actualizarRojo();

    });


// ==========================================
// RESTABLECER COLORES
// ==========================================

document
    .getElementById("resetButton")
    .addEventListener("click", function () {

        // Convertimos los colores originales a RGB
        const verde = hexToRgb(colorInicialVerde);

        const rojo = hexToRgb(colorInicialRojo);


        // Restablecemos verde
        document.getElementById("greenR").value = verde.r;

        document.getElementById("greenG").value = verde.g;

        document.getElementById("greenB").value = verde.b;


        // Restablecemos rojo
        document.getElementById("redR").value = rojo.r;

        document.getElementById("redG").value = rojo.g;

        document.getElementById("redB").value = rojo.b;


        // Actualizamos la bandera
        actualizarVerde();

        actualizarRojo();

    });


// ==========================================
// INICIAR APLICACIÓN
// ==========================================

actualizarVerde();

actualizarRojo();