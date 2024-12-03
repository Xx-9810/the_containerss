function iniciarSesion() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Obtener datos de localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Verificar credenciales
    if (username === storedUsername && password === storedPassword) {
        alert("Inicio de sesión exitoso. ¡Bienvenido, " + username + "!");
        // Redirigir a una página de bienvenida (puedes crear una)
        window.location.href = "index1.html"; 
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}



