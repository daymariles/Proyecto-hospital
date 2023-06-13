function mostrarPacientes() {
    let pacientes = []
    let localpacientes = localStorage.getItem("pacientes")
    if (localpacientes) {
        pacientes = JSON.parse(localpacientes)
    }
    const tablapacientes = document.getElementById("tabla-pacientes")
    const cuerpoTabla = tablapacientes.getElementsByTagName("tbody")[0]

    pacientes.forEach(paciente => {
        let fila = cuerpoTabla.insertRow()
        const celdaNombrePaciente = fila.insertCell()
        celdaNombrePaciente.textContent= paciente.nombrePaciente
        const celdaApellido = fila.insertCell();
        celdaApellido.textContent=paciente.nombreDuenio
        const celdaCedulas = fila.insertCell();
        celdaCedulas.textContent=paciente.cedula
        const celdaEdades = fila.insertCell();
        celdaEdades.textContent=paciente.edadPaciente
        const celdaTelefono = fila.insertCell();
        celdaTelefono.textContent=paciente.telefono
        const celdaEspecialidad = fila.insertCell();
        celdaEspecialidad.textContent=paciente.especialidad
    });
}

mostrarPacientes()