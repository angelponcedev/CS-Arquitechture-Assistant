function checkOption() {
    const opcion1 = document.getElementById("opciones-1");
    const opcion2 = document.getElementById("opciones-2");
    const opcion3 = document.getElementById("opciones-3");
    const opcion4 = document.getElementById("opciones-4");
    const opcion5 = document.getElementById("opciones-5");
    const opcion6 = document.getElementById("opciones-6");
    const recomendacionesContainer = document.getElementById("recomendaciones"); // Contenedor donde se añadirán las recomendaciones
    const valor1 = parseInt(opcion1.value, 10);
    const valor2 = parseInt(opcion2.value, 10);
    const valor3 = parseInt(opcion3.value, 10);
    const valor4 = parseInt(opcion4.value, 10);
    const valor5 = parseInt(opcion5.value, 10);
    const valor6 = parseInt(opcion6.value, 10);

    // Crear una cadena para las recomendaciones
    let recomendaciones = [];
    recomendacionesContainer.innerHTML = "";

    if (valor1 >= 3 && valor1!=0) {
        recomendaciones.push("Recomendación Pregunta 1:");
        recomendaciones.push("→Usability Tactics");
        recomendaciones.push("&nbsp;&nbsp;→Support System Initiative");
        recomendaciones.push("&nbsp;&nbsp;&nbsp;&nbsp;→Maintain User Model");
        recomendaciones.push("Guardar una sesión por usuario mantenida en el servidor.");
        recomendaciones.push("");
    } 
    if (valor2 >= 3 && valor2!=0) {
        recomendaciones.push("Recomendación Pregunta 2:");
        recomendaciones.push("→Usability Tactics");
        recomendaciones.push("&nbsp;&nbsp;→Support System Initiative");
        recomendaciones.push("&nbsp;&nbsp;&nbsp;&nbsp;→Maintain Task Model");
        recomendaciones.push("Replantear interfaz del modelo de interacción del usuario para reducir la sobrecarga de información.");
        recomendaciones.push("");
    }
    if (valor3 <= 3 && valor3!=0) {
        recomendaciones.push("Recomendación Pregunta 3:");
        recomendaciones.push("→Usability Tactics");
        recomendaciones.push("&nbsp;&nbsp;→Support System Initiative");
        recomendaciones.push("&nbsp;&nbsp;&nbsp;&nbsp;→Maintain System Model");
        recomendaciones.push("Estandarizar la experiencia del sistema en distintas plataformas de uso.");
        recomendaciones.push("");
    }
    if (valor4 <= 2 && valor4!=0) {
        recomendaciones.push("Recomendación Pregunta 4:");
        recomendaciones.push("→Usability Tactics");
        recomendaciones.push("&nbsp;&nbsp;→Support System Initiative");
        recomendaciones.push("&nbsp;&nbsp;&nbsp;&nbsp;→Maintain Task Model");
        recomendaciones.push("Recomendación Pregunta 4: Replantear cadena de interacciones necesarias para completar una tarea con el modelo actual.");
        recomendaciones.push("");
    } 
    if (valor5 <= 2 && valor5!=0) {
        recomendaciones.push("Recomendación Pregunta 5:");
        recomendaciones.push("→Availability Tactics");
        recomendaciones.push("&nbsp;&nbsp;→Recover from Faults");
        recomendaciones.push("&nbsp;&nbsp;&nbsp;&nbsp;→Preparation and Repair");
        recomendaciones.push("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→Software Upgrade");
        recomendaciones.push("Ampliación del servidor y correccion de errores en codigo de produccion.");
        recomendaciones.push("");
    }
    if (valor6 >= 3 && valor6!=0) {
        recomendaciones.push("Recomendación Pregunta 6:");
        recomendaciones.push("→Availability Tactics");
        recomendaciones.push("&nbsp;&nbsp;→Recover from Faults");
        recomendaciones.push("&nbsp;&nbsp;&nbsp;&nbsp;→Reintroduction");
        recomendaciones.push("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→State Resynchronization");
        recomendaciones.push("Recomendación Pregunta 6: Usar arquitecturas con componentes independientes y reutilizables, hacer uso de resinronizacion de estado cliente-servidor para garantizar el buen despliegue de informacion e interfaces.");
        recomendaciones.push("");
    }

    // Si hay alguna recomendación, creamos un nuevo elemento p y lo añadimos
    recomendaciones.forEach(recomendacion => {
        
        if(recomendacion != ""){
            const p = document.createElement("p");
            p.innerHTML = recomendacion; // Usar innerHTML para interpretar los caracteres especiales
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




