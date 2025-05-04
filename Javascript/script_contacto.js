// Función que valida el formulario antes de enviarlo
function validarFormulario() {
    const nombre = document.getElementById("nombre").value;     // Obtiene el valor del campo de nombre
    const correo = document.getElementById("correo").value;     // Obtiene el valor del campo de correo
    const telefono = document.getElementById("telefono").value; // Obtiene el valor del campo de teléfono

    // Verifica si alguno de los campos está vacío
    if (nombre.trim() === "" || correo.trim() === "" || telefono.trim() === "") {
        alert("Por favor completa todos los campos.");  // Muestra una alerta si algún campo está vacío
        return false;  // Evita que el formulario se envíe
    }

    alert("Formulario enviado correctamente.");  // Muestra un mensaje de éxito si todos los campos están completos
    return true;  // Permite que el formulario se envíe
}