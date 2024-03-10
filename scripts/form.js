document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado de envío del formulario

    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let empresa = document.getElementById('empresa').value;
    let url = document.getElementById('url').value;
    let asunto = document.getElementById('asunto').value;
    let descripcion = document.getElementById('descripcion').value;
    let telefono = document.getElementById('descripcion').value;

    let cuerpoCorreo = `Nombre: ${nombre}\nApellidos: ${apellidos}\nEmpresa: ${empresa}\nURL de la web: ${url}\nDescripción: ${descripcion}\nTelefono: ${telefono}`;

    window.location.href = `mailto:pruebajesus@proton.me?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpoCorreo)}`;
});