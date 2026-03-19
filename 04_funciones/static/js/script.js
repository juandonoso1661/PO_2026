console.log("Conectado...")

// Ejercicio 1: Lista de Asistencia (push)
let asistencia = [];
function agregarLista(nombre) {
    asistencia.push(nombre);
    return asistencia.join(", ");
};

function registrarAlumno() {
    const container = document.getElementById("resultadoContainer1");
    const result = document.getElementById("resultado1");
    const input = document.getElementById("input1");
    let nombre = input.value;
    let resultado = agregarLista(nombre); // --> Llamado a la función con envío de parámetros
    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
};

//Ejercicio 2

let pacientes = ["Carlos", "Maria", "Diego"];
function agregarUrgencia(nombre) {
    pacientes.unshift(nombre);
    return pacientes.join(", ")
};

function ejercicio_2() {
    const container = document.getElementById("resultadoContainer2");
    const result = document.getElementById("resultado2");
    const input = document.getElementById("input2");
    if (input.value !== "") {
        let nombre = input.value;
        let resultado = agregarUrgencia(nombre);
        result.textContent = resultado;
        input.value = "";
        container.classList.remove("d-none");
    } else {
        alert("No puede estar vacío");
    };
};

//Ejercicio 3: Sistema de Delivery (shift, pop e if)

let entregas = ["Pizza", "Sushi", "Hamburguesa", "Ensalada"];
function actualizarPedido(pedido) {
    if (pedido == "despachar") {
        entregas.shift()
    } else if (pedido == "cancelar") {
        entregas.pop()
    } else {
        alert("ingrese un valor válido")
    }
    return `Pedidos pendientes: ${entregas.join(", ")}`
}

function gestionarPedidos() {
    const container = document.getElementById("resultadoContainer3");
    const result = document.getElementById("resultado3");
    let input = document.getElementById("input3").value;
    let resultado = actualizarPedido(input);
    result.textContent = resultado;
    input.value = " ";
    container.classList.remove("d-none")
}

//Ejercicio 4: Validador de Códigos de Descuento (for e if)
let codigosValidos = ["VERANO2026", "PROMO50", "CLIENTEVIP"]
function validadorCodigo(validar) {
    
}