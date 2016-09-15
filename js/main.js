function validateForm(){
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var correo = document.getElementById("input-email").value;
    var contraseña = document.getElementById("input-password").value;

        if(nombre == null || nombre.length == 0 || /^[A-Z][a-z]*/.test(nombre) == false) {
            return alert('Ingresa tu Nombre y la primera letra con mayúscula');
        }
         else if (apellido == null || apellido.length == 0 || /^[a-z][a-z]*/.test(apellido) == false) {
            return alert('Ingresa tu apellido y la primera letra con mayúscula');
         }
         else if (correo == null || correo.length == 0 || /^\s+$/.test(correo)) {
           	return alert('Ingresa tu Correo');
         }
         else if (contraseña == null || contraseña.length == 0 || /^\s+$/.test(contraseña)) {
           	return alert('Ingresa tu contraseña');
         }
}