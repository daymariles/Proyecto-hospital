// Se obtienen los campos del formulario
const paciente = document.getElementById("paciente")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const edad = document.getElementById("edad")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")
const formularioRegistro = document.getElementById("registro-pacientes-form")
// Se le da una funcion al boton submit del formulario
formularioRegistro.addEventListener("submit", function (event) {
    event.preventDefault();
    // Se crea el objeto medico para guardar los valores que ingresan en el formulario
    const Paciente ={
        atributoPaciente: paciente.value,
        apellido: apellido.value,
        cedula: cedula.value,
        edad: edad.value,
        telefono: telefono.value,
        especialidad: especialidad.value
    }
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes) {
        pacientes = JSON.parse(localPacientes)
    }
    pacientes.push(paciente)
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
    formularioRegistro.reset()
    alert("Paciente registrado con exito")
})