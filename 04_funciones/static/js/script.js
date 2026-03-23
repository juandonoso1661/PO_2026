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

// Ejercicio 2: Lista de asistencia medica
let pacientes = ["Carlos", "María", "Diego"];
function agregarUrgencia(){
    pacientes.unshift();
    return pacientes.join(", ");
};

