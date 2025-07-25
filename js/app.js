document.addEventListener('DOMContentLoaded', () => {
     
    const inputNombre = document.querySelector('#nombre')
    const inputCorreo = document.querySelector('#correo')
    const inputContraseña = document.querySelector('#contraseña')

    const formulario = document.querySelector('#formulario')
    formulario.addEventListener('submit', function(e){
        e.preventDefault()

        const suNombre = inputNombre.value;
        const suCorreo = inputCorreo.value;
        const suContraseña = inputContraseña.value;
 
        if (!suNombre || !suCorreo || !suContraseña) {
        alert('Por favor, completa todos los campos.');
        return;
        }
        
        const usuario = {
            nombre: inputNombre.value,
            correo: inputCorreo.value,
            contraseña: inputContraseña.value
        }   

        localStorage.setItem('usuario', JSON.stringify(usuario));
        formulario.reset();

        alert('Usuario registrado con éxito');

    })

    const usuarioGuardado = localStorage.getItem('usuario')
    if(usuarioGuardado){
        const usuarioObjeto = JSON.parse(usuarioGuardado)
        
    }
    
})