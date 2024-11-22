function checkOption() {
    const opcion1 = document.querySelector('input[name="pregunta1"]:checked');
    const opcion2 = document.querySelector('input[name="pregunta2"]:checked');
    const opcion3 = document.querySelector('input[name="pregunta3"]:checked');
    const opcion4 = document.querySelector('input[name="pregunta4"]:checked');
    const opcion5 = document.querySelector('input[name="pregunta5"]:checked');
    const opcion6 = document.querySelector('input[name="pregunta6"]:checked');
    const opcion7 = document.querySelector('input[name="pregunta7"]:checked');
    const opcion8 = document.querySelector('input[name="pregunta8"]:checked');
    const opcion9 = document.querySelector('input[name="pregunta9"]:checked');
    const opcion10 = document.querySelector('input[name="pregunta10"]:checked');
    const opcion11 = document.querySelector('input[name="pregunta11"]:checked');
    const opcion12 = document.querySelector('input[name="pregunta12"]:checked');
    const recomendacionesContainer = document.getElementById("recomendaciones");
    const cuestionario = document.getElementById("cuestionario")

    let recomendaciones = [];
    recomendacionesContainer.innerHTML = "";

    if (opcion1) {
        const valorSeleccionado = opcion1.value;
        if(valorSeleccionado == "true"){
            //Que los input radio con name=pregunta2 sean seleccionables
            const pregunta2Inputs = document.querySelectorAll('input[name="pregunta2"]');
            pregunta2Inputs.forEach(input => {
                input.disabled = false;
            });
        }
        else{
            //Que los input radio con name=pregunta2 NO sean seleccionables
            const pregunta2Inputs = document.querySelectorAll('input[name="pregunta2"]');
            pregunta2Inputs.forEach(input => {
                input.disabled = true;
            });
            // Limpiar la selección de la pregunta 2
            const pregunta2SelectedInput = document.querySelector('input[name="pregunta2"]:checked');
            if (pregunta2SelectedInput) {
                pregunta2SelectedInput.checked = false;
            }
        }
    }
    if(opcion2){
        const valorSeleccionado = parseInt(opcion2.value);
        if(valorSeleccionado >= 3){
            recomendaciones.push("Recomendaciónes Para Pregunta 1");
            recomendaciones.push("¿Tu sistema cierra sesion cada que se cambia de modulo?");
            recomendaciones.push("→Usability Tactics");
            recomendaciones.push("&nbsp;&nbsp;→Support System Initiative");
            recomendaciones.push("&nbsp;&nbsp;&nbsp;&nbsp;→Maintain User Model");
            recomendaciones.push("+ Guardar una sesión por usuario mantenida en el servidor.");
            if(valorSeleccionado >= 4){
                recomendaciones.push("+ Aplicar monitoreo básico para identificar causas de desconexión en módulos específicos.");
            }
            if(valorSeleccionado >= 5){
                recomendaciones.push("+ Considerar implementar un tiempo de vida de sesión dinámico para reducir cierres inesperados.");
            }
            recomendaciones.push("");
        }
    }
    if (opcion3) {
        const valorSeleccionado = opcion3.value;
        if(valorSeleccionado == "true"){
            //Que los input radio con name=pregunta4 sean seleccionables
            const pregunta4Inputs = document.querySelectorAll('input[name="pregunta4"]');
            pregunta4Inputs.forEach(input => {
                input.disabled = false;
            });
        }
        else{
            //Que los input radio con name=pregunta2 NO sean seleccionables
            const pregunta4Inputs = document.querySelectorAll('input[name="pregunta4"]');
            pregunta4Inputs.forEach(input => {
                input.disabled = true;
            });
            // Limpiar la selección de la pregunta 2
            const pregunta4SelectedInput = document.querySelector('input[name="pregunta4"]:checked');
            if (pregunta4SelectedInput) {
                pregunta4SelectedInput.checked = false;
            }
        }
    }
    if(opcion4){
        const valorSeleccionado = parseInt(opcion4.value)
        if (valorSeleccionado >= 3) {
            recomendaciones.push("Recomendación Pregunta 3:");
            recomendaciones.push("¿Tu sistema tiene sobrecarga de informacion y opciones en su interfaz?");
            recomendaciones.push("→Usability Tactics");
            recomendaciones.push("&nbsp;&nbsp;→Support System Initiative");
            recomendaciones.push("&nbsp;&nbsp;&nbsp;&nbsp;→Maintain Task Model");
            recomendaciones.push("+ Replantear interfaz del modelo de interacción del usuario para reducir la sobrecarga de información.");
            if(valorSeleccionado >= 4){
                recomendaciones.push("+ Priorizar las opciones más utilizadas por los usuarios y ocultar las avanzadas en menús desplegables.");
            }
            if(valorSeleccionado >= 5){
                recomendaciones.push("+ Realizar pruebas de usabilidad con usuarios reales para identificar y eliminar elementos innecesarios en la interfaz.");
            }
            recomendaciones.push("");
        }
    }
    if (opcion5) {
        const valorSeleccionado = opcion5.value;
        if(valorSeleccionado == "false"){
            //Que los input radio con name=pregunta4 sean seleccionables
            const pregunta6Inputs = document.querySelectorAll('input[name="pregunta6"]');
            pregunta6Inputs.forEach(input => {
                input.disabled = false;
            });
        }
        else{
            //Que los input radio con name=pregunta2 NO sean seleccionables
            const pregunta6Inputs = document.querySelectorAll('input[name="pregunta6"]');
            pregunta6Inputs.forEach(input => {
                input.disabled = true;
            });
            // Limpiar la selección de la pregunta 2
            const pregunta6SelectedInput = document.querySelector('input[name="pregunta6"]:checked');
            if (pregunta6SelectedInput) {
                pregunta6SelectedInput.checked = false;
            }
        }
    }
    if(opcion6){
        const valorSeleccionado = parseInt(opcion6.value)
        if (valorSeleccionado <= 2) {
            recomendaciones.push("Recomendación Pregunta 5:");
            recomendaciones.push("¿Tu sistema se adapta a distintas plataformas?");
            recomendaciones.push("→Usability Tactics");
            recomendaciones.push("&nbsp;&nbsp;→Support System Initiative");
            recomendaciones.push("&nbsp;&nbsp;&nbsp;&nbsp;→Maintain System Model");
            recomendaciones.push("+ Estandarizar la experiencia del sistema en distintas plataformas de uso.");
            if(valorSeleccionado <= 1){
                recomendaciones.push("+ Implementar diseño responsivo para asegurar funcionalidad y consistencia en dispositivos móviles y de escritorio.")
            }
            recomendaciones.push("");
        }
    }
    if (opcion7) {
        const valorSeleccionado = opcion7.value;
        if(valorSeleccionado == "false"){
            //Que los input radio con name=pregunta4 sean seleccionables
            const pregunta8Inputs = document.querySelectorAll('input[name="pregunta8"]');
            pregunta8Inputs.forEach(input => {
                input.disabled = false;
            });
        }
        else{
            //Que los input radio con name=pregunta2 NO sean seleccionables
            const pregunta8Inputs = document.querySelectorAll('input[name="pregunta8"]');
            pregunta8Inputs.forEach(input => {
                input.disabled = true;
            });
            // Limpiar la selección de la pregunta 2
            const pregunta8SelectedInput = document.querySelector('input[name="pregunta8"]:checked');
            if (pregunta8SelectedInput) {
                pregunta8SelectedInput.checked = false;
            }
        }
    }
    if(opcion8){
        const valorSeleccionado = parseInt(opcion8.value)
        if (valorSeleccionado <= 2) {
            recomendaciones.push("Recomendación Pregunta 7:");
            recomendaciones.push("¿El sistema es intuitivo o fácil de usar?");
            recomendaciones.push("→Usability Tactics");
            recomendaciones.push("&nbsp;&nbsp;→Support System Initiative");
            recomendaciones.push("&nbsp;&nbsp;&nbsp;&nbsp;→Maintain Task Model");
            recomendaciones.push("+ Replantear cadena de interacciones necesarias para completar una tarea con el modelo actual.");
            if(valorSeleccionado <= 1){
                recomendaciones.push("+ Simplificar la interfaz reorganizando los elementos visuales para priorizar las acciones más importantes.")
            }
            recomendaciones.push("");
        }
    }
    if (opcion9) {
        const valorSeleccionado = opcion9.value;
        if(valorSeleccionado == "true"){
            //Que los input radio con name=pregunta4 sean seleccionables
            const pregunta10Inputs = document.querySelectorAll('input[name="pregunta10"]');
            pregunta10Inputs.forEach(input => {
                input.disabled = false;
            });
        }
        else{
            //Que los input radio con name=pregunta2 NO sean seleccionables
            const pregunta10Inputs = document.querySelectorAll('input[name="pregunta10"]');
            pregunta10Inputs.forEach(input => {
                input.disabled = true;
            });
            // Limpiar la selección de la pregunta 2
            const pregunta10SelectedInput = document.querySelector('input[name="pregunta10"]:checked');
            if (pregunta10SelectedInput) {
                pregunta10SelectedInput.checked = false;
            }
        }
    }
    if(opcion10){
        const valorSeleccionado = parseInt(opcion10.value)
        if (valorSeleccionado <= 2) {
            recomendaciones.push("Recomendación Pregunta 9:");
            recomendaciones.push("¿El sistema es lento en su tiempo de respuesta?");
            recomendaciones.push("→Usability Tactics");
            recomendaciones.push("&nbsp;&nbsp;→Support System Initiative");
            recomendaciones.push("&nbsp;&nbsp;&nbsp;&nbsp;→Maintain System Model");
            recomendaciones.push("+ Distribuir operaciones logicas necesarias entre el servidor y el cliente para aligerar la cantidad de data necesaria para comunicar cliente-servidor.");
            if(valorSeleccionado <= 1){
                recomendaciones.push("+ Implementar caché local para almacenar datos frecuentes y reducir el número de solicitudes al servidor.")
            }
            recomendaciones.push("");
        }
    }
    if (opcion11) {
        const valorSeleccionado = opcion11.value;
        if(valorSeleccionado == "true"){
            //Que los input radio con name=pregunta4 sean seleccionables
            const pregunta12Inputs = document.querySelectorAll('input[name="pregunta12"]');
            pregunta12Inputs.forEach(input => {
                input.disabled = false;
            });
        }
        else{
            //Que los input radio con name=pregunta2 NO sean seleccionables
            const pregunta12Inputs = document.querySelectorAll('input[name="pregunta12"]');
            pregunta12Inputs.forEach(input => {
                input.disabled = true;
            });
            // Limpiar la selección de la pregunta 2
            const pregunta12SelectedInput = document.querySelector('input[name="pregunta12"]:checked');
            if (pregunta12SelectedInput) {
                pregunta12SelectedInput.checked = false;
            }
        }
    }
    if(opcion12){
        const valorSeleccionado = parseInt(opcion12.value)
        if (valorSeleccionado >= 3) {
            recomendaciones.push("Recomendación Pregunta 11:");
            recomendaciones.push("¿El sistema tiene funcionalidades duplicadas?");
            recomendaciones.push("→Usability Tactics");
            recomendaciones.push("&nbsp;&nbsp;→Support System Initiative");
            recomendaciones.push("&nbsp;&nbsp;&nbsp;&nbsp;→Maintain Task Model");
            recomendaciones.push("+ Revisar que las funciones disponibles al usuario sean las adecuadas en todo momento, evitar duplicaciones de funciones ayuda a reducir la sobrecarga de opciones e informacion.");
            if(valorSeleccionado >= 4){
                recomendaciones.push("+ Consolidar funciones que tienen objetivos similares en una única operación más robusta y clara.")
            }
            if(valorSeleccionado >= 5){
                recomendaciones.push("+ Eliminar funciones redundantes mediante Code Reviews mas frecuentes")
            }
            recomendaciones.push("");
        }
    }
    
    recomendaciones.forEach(recomendacion => {
        if(recomendacion != ""){
            const p = document.createElement("p");
            p.innerHTML = recomendacion;
            recomendacionesContainer.appendChild(p);
        }
        else{
            const br = document.createElement("br");
            const hr = document.createElement("hr");
            recomendacionesContainer.appendChild(hr);
            recomendacionesContainer.appendChild(br);
        }
    });
}

function insertRequirement(event) {
    // Prevenir que el formulario se reinicie
    event.preventDefault();

    const requisitos = [
        "Requisito 1: El usuario repite el inicio de sesion cada que se cambia de modulo, mantener sesion iniciada atraves de modulos.", 
        "Requisito 2: Diseño estético: Sobrecargada de información en los menús, replantear interfaz.",
        "Requisito 3: No es multiplataforma: Adaptar el diseño a varios dispositivos.", 
        "Requisito 4: Demasiados pasos para completar una tarea, simplificar acciones necesarias.",
        "Requisito 5: Sistema tarda en responder a clicks, acelerar el tiempo de respuesta",
        "Requisito 6: El sistema cuenta con funciones duplicadas, simplificar sistema a solo funciones necesarias"
    ];
    
    // Obtener el botón que fue clickeado
    const button = event.target;
    
    // Obtener el índice desde el atributo data del botón
    const index = button.getAttribute('data-index');
    
    // Encontrar el contenedor correspondiente
    const requisitoContainer = document.getElementById(`requisito${index}`);

    // En lugar de borrar todo, simplemente agregamos un párrafo
    const p = document.createElement("p"); 
    p.textContent = requisitos[index - 1];  // Ajustar índice ya que el arreglo es base 0
    
    // Limpiar contenedor solo si está vacío
    if (requisitoContainer.children.length === 0) {
        requisitoContainer.appendChild(p);
    }
}

// Asegurarse de que la función insertRequirement esté disponible cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
    // Agregar event listeners a todos los botones de requisitos
    const botonesRequisito = document.querySelectorAll('[onclick="insertRequirement(event)"]');
    botonesRequisito.forEach(boton => {
        boton.addEventListener('click', insertRequirement);
    });
});


