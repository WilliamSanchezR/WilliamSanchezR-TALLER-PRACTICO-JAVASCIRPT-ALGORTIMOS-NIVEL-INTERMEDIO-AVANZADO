
// Ejercicios condicionales

// Ejercicio condicional #1: Algoritmo el cual evaluara 10 notas numéricas (entre 0 y 5). Luego, calculará el promedio de estas notas y determinará si el estudiante aprobó o no

function rendimientoEstudiante () {

    alert("Algoritmo para evaluar el rendimiento de los estudiantes en una materia especifica el sistema debe permitir ingresar 10 notas numericas entre 0 y 5 luego calculara el promedio de estas notas y determinara si el estudiante aprobo o no y se considera aprobado con un promedio de 3.0 o superior finalmente debera mostrar la calificacion literal correspondiente al promedio");

    let total = 0;

    // Usamos un bucle for que se repite 10 veces (una por cada nota) use esto por lo que el instructor explico xd
    for (let i = 0; i < 10; ) {
        let nota = parseFloat(prompt("Ingresa la nota número " + (i + 1))); // Pedimos la nota al usuario
        if (nota >= 0 && nota <= 5) {                                       // Verificamos que la nota sea válida (entre 0 y 5)
            total = total + nota; // sumamos la nota al total, esto lo hacemos gracias a que cada vez que agreguemos una nota se sumara a la anterior que se agrego
            i++; // solo aumentamos si la nota fue válida
        } else {
            alert("Nota inválida. Debe estar entre 0 y 5."); // mensaje de error
        }
    }

    let promedio = total / 10;
    let mensaje = "";
    let resultado = "";

    // Según el promedio, asignamos el mensaje que sacara el estudiante por la nota obtenida
    if (promedio >= 4.5) {
        mensaje = "Excelente";
    } else if (promedio >= 4.0) {
        mensaje = "Sobresaliente";
    } else if (promedio >= 3.0) {
        mensaje = "Aceptable";
    } else {
        mensaje = "Reprobado";
    }

    // Decidimos si aprobó o no
    if (promedio >= 3.0) {
        resultado = "aprobó";
    } else {
        resultado = "reprobó";
    }

    // Mostramos el resultado final al usuario
    alert("El estudiante " + resultado + " con un promedio de " + promedio + " - " + mensaje);
}

// Ejercicio condicional #2: Algoritmo el cual solicitará la edad del estudiante y mostrará la categoría correspondiente junto con una breve descripción de las características generales de esa etapa en el contexto educativo.

function clasificacionEtapas () {
    let edad = 0;
    let etapa = "";

    alert("Clasificación de Etapas de la Vida con Contexto Educativo");

    edad = parseInt(prompt("Ingresa tu edad \n(valor numerico)"))

    if (isNaN(edad)) { //     // Realiza una validación para asegurarse de que la entrada del usuario sea un número válido.
    alert("Por favor, ingresa un valor numérico válido para la edad.");
    return; // Sale de la función si la validación falla, evitando errores posteriores.
    }
    if (edad == "") {
        etapa = "Ingresa un valor valido \n(Valor numerico)";
    }else if (edad < 12) {
        etapa = "Niño(a) - Enfocado en aprendizaje lúdico y exploración.";
    }else if (edad < 17) {
        etapa = "Adolescente - Etapa de desarrollo del pensamiento crítico y la identidad. ";
    } else if (edad < 25) {
        etapa = "Joven Adulto - Transición a la educación superior o al mundo laboral. ";
    } else if (edad < 60) {
        etapa = "Adulto - Posiblemente cursando estudios de posgrado o formación continua. ";
    } else {
        etapa = "Adulto Mayor - Participación en programas de aprendizaje permanente o por interés personal. ";
    }

    alert(etapa)
}

// Ejercicio condicional #3: Algoritmo que muestre el día de la semana o el mes correspondiente, o un mensaje de error si la entrada no es válida.

function conversorTiempo () {
    let tipoTiempo = '';
    let numero = 0;

    alert("Dependiendo de la elección del usuario y el número ingresado, el sistema mostrará el día de la semana o el mes correspondiente, o un mensaje de error si la entrada no es válida.");

    tipoTiempo = prompt("Ingrese la palabra día o mes que desee trabajar");

    switch (tipoTiempo) { // Utiliza una estructura switch para manejar diferentes casos basados en la entrada del usuario para el tipo de tiempo.

        case 'dia':
            numero = parseInt(prompt("Ingrese un número entre 1 y 7"))
            break;
        case 'mes':
            numero = parseInt(prompt("Ingresa un número entre 1 y 12"))

            break;

        default: // Caso por defecto si el usuario no ingresa 'dia' o 'mes'.
            alert("No se ingreso un valor valido para convertir el tiempo");
            break;
    }

// Si el usuario eligió trabajar con 'dia'.

    if (tipoTiempo === "dia") {
        switch (numero) {
            case 1:
                alert("El dia ingresado es lunes")
                break;
            case 2:
                alert("El dia ingresado es martes")
                break;
            case 3:
                alert("El dia ingresado es miercoles")
                break;
            case 4:
                alert("El dia ingresado es jueves")
                break;
            case 5:
                alert("El dia ingresado es viernes")
                break;
            case 6:
                alert("El dia ingresado es sabado")
                break;
            case 7:
                alert("El dia ingresado es domingo")
                break;

            default:
                alert("El valor ingresado no corresponde a un dia de la semana ")
                break;
        }
    }

// Si el usuario eligió trabajar con 'mes'.

    if(tipoTiempo === "mes"){
        switch (numero) {
            case 1:
                alert("El mes ingresado es enero");                
                break;
                case 2:
                alert("El mes ingresado es febrero");                
                break;
                case 3:
                alert("El mes ingresado es marzo");                
                break;
                case 4:
                alert("El mes ingresado es abril");                
                break;
                case 5:
                alert("El mes ingresado es mayo");                
                break;
                case 6:
                alert("El mes ingresado es junio");                
                break;
                case 7:
                alert("El mes ingresado es julio");                
                break;
                case 8:
                alert("El mes ingresado es agosto");                
                break;
                case 9:
                alert("El mes ingresado es septiembre");                
                break;
                case 10:
                alert("El mes ingresado es octubre");                
                break;
                case 11:
                alert("El mes ingresado es noviembre");                
                break;
                case 12:
                alert("El mes ingresado es diciembre");                
                break;
        
            default:
                alert("El valor ingresado no corresponde a un mes del año ")
                break;
        }
    }
}

// Ejercicio condicional #4: Este algoritmo ofrecera un menú interactivo para realizar operaciones matemáticas básicas. El usuario verá las siguientes opciones: 

function menuInteractivo () {
    let tipoOperacion = '';
    let valor = 0;

    alert("Menú interactivo para realizar operaciones matemáticas básicas.")

    tipoOperacion = prompt("INGRESE EL NUMERO DE LA OPCION DESEADA: \n1.Suma Entre Dos Numeros\n2.Resta Entre Dos Numeros\n3.Division Entre Dos Numeros\n4.Multiplicacion Entre Dos Numeros"
    )

    let N1 = parseInt(prompt("Ingrese el primer valor")); // Solicita al usuario que ingrese el primer valor y lo convierte a un número entero.
    let N2 = parseInt(prompt("Ingrese el segundo valor"));

    switch (tipoOperacion) { // Usamos una estructura switch para realizar la operacion escogida por el usuario, calculando lo escogido por el usurio en cada uno de los casos
        case '1':
            valor = N1 + N2;
            alert("El resultado de la suma es: " + valor);
            break;
        case '2':
            valor = N1 - N2;
            alert("El resultado de la resta es: " + valor);
            break;
        case '3':
            valor = N1 / N2;
            alert("El resultado de la division es: " + valor);
            break;
        case '4':
            valor = N1 * N2;
            alert("El resultado de la multiplicacion es: " + valor);
            break;
        default:
            alert("No se ingresó una opción válida para la operación.");
            break;
    }
}

// Ejercicio condicional #5: Algoritmo que ayudara a una empresa de servicios públicos en un municipio colombiano aplica diferentes tarifas de acuerdo con el estrato socioeconómico de las viviendas 

function calculoDeTarifa () {

    let estrato = 0;

    alert("Una empresa de servicios públicos en un municipio colombiano aplica diferentes tarifas de acuerdo con el estrato socioeconómico de las viviendas de los usuarios, buscando así una distribución más equitativa de los costos:")

    estrato = prompt("Ingrese el estrato de su vivienda (1-7) \n(Valor numerico)")

    switch(estrato){   // Utiliza una estructura switch para determinar la tarifa correspondiente al estrato ingresado.
        case '1':
        alert("Viviendas de bajos recursos\nEl valor de su tarifa es de: $10.000")
        break;

        case '2':
        alert("Viviendas de recursos medios bajos\nEl valor de su tarifa es de: $15.000")
        break;

        case '3':
        alert("Viviendas de recursos medios\nEl valor de su tarifa es de: $20.000")
        break

        case '4':
        alert("Viviendas de recursos medios altos\nEl valor de su tarifa es de: $25.000")
        break

        case '5':
        alert("Viviendas de altos recursos\nEl valor de su tarifa es de: $25.000")
        break

        case '6':
        alert("Viviendas de altos recursos\nEl valor de su tarifa es de: $25.000")
        break

        default:
            alert("No se ingreso un estrato valido")
        break;

        
    }
    


}

// Ejercicio condicional #6: Algoritmo que ayudara que un sistema de salud permita a sus usuarios conocer su Índice de Masa Corporal (IMC) y la categoría en la que se encuentran, ofreciendo además recomendaciones generales

function clasificacionSalud (){

    let peso = 0;
    let altura = 0;
    let imc = 0;

    alert("Un sistema de salud permite a los usuarios conocer su Índice de Masa Corporal (IMC) y la categoría en la que se encuentran, ofreciendo además recomendaciones generales:")

    peso = prompt("Ingrese su peso en Kilogramos (Kg) ")
    altura = prompt("Ingrese su estatura en Metros (M)")
    imc = peso / (altura * altura)

    if (imc <= 18.5 ) {
        valorImc =  "Bajo peso \nSe recomienda consultar a un nutricionista."
    }
        else if (imc <= 25) {
            valorImc = "Normal \n¡Mantén un estilo de vida saludable!"
        }
        else if (imc < 30 ) {
            valorImc = "Sobrepeso \nConsidera realizar más actividad física y mejorar tu dieta."
        }
        else (imc >= 30 ) 
            valorImc = "Obesidad  \nEs importante buscar asesoramiento médico para un plan de salud integral."
        

alert("Tu Indice de Masa Corporal (IMC) es de " + imc + "\nEl paciente esta: " + valorImc)

}

// Ejercicio condicional #7: Este algoritmo esta hecho para que una empresa calcule el sueldo total de sus empleados considerando un sueldo base y una bonificación adicional basada en el número de sus hijos.

function calculadoraSueldo () {
    let bonificacion = 0;
    let bonificacionObtenida = 0;
    let sueldoAPagar = 0;

// Al incio declaro tres variables que mas adelante utilizare para la formulacion

    alert("La empresa tiene una nueva forma de generar nuevas bonificaciones salariales, que podrás obtener por la cantidad de hijos que tengas.");

    let sueldoBase = parseInt(prompt("Ingresa el valor de tu sueldo"));
    let numeroHijos = parseInt(prompt("Ingresa la cantidad de hijos que tengas"));

// Despues declaro dos variables y que al instante se les asigne un valor, que sera dado por el usuario

    if (numeroHijos >= 3) {
        bonificacion = 1.10;
        bonificacionObtenida = sueldoBase * (bonificacion - 1)  // Esta formula esta puesta para que me arroje el valor de la bonificacion, y poder tomar ese valor y mostrarlo en el proximo alert
        alert("Tendras una bonificacion del 10% que es un total de " + bonificacionObtenida )
    } else if (numeroHijos > 0) {
        bonificacion = 1.05;
        bonificacionObtenida = sueldoBase * (bonificacion - 1)  // Esta formula esta puesta para que me arroje el valor de la bonificacion, y poder tomar ese valor y mostrarlo en el proximo alert
        alert("Tendras una bonificacion del 5% que es un total de " + bonificacionObtenida)
    } else {
        bonificacion = 1.0;
        alert("No tendras bonificacion")
    }

// Realizamos tres condicionales, para que, dependiendo de la cantidad de hijos se les asigne una bonificacion 

    sueldoAPagar = sueldoBase * bonificacion;

    alert("Tu salario final sera de : " + sueldoAPagar);
}

// Ejercicio condicional #8: Este algoritmo esta hecho para ejecutar un sistema de un banco de sangre, necesita informar a los donantes y receptores sobre las posibles compatibilidades de donación según el tipo de sangre: 

function clacificacionSangre () {

    let rh = "";

    alert("Este algoritmo esta hecho para ejecutar un sistema que te informara a que tipos de sangre podras donar y/o ser receptor, todo para saber las compatibilidades de donacion")

    rh = prompt("Ingresa tu tipo de sangre \n(A, B, AB, O)").toUpperCase(); // lo que el usuario ingrese y sea en letras minusculas las convertira a mayúscula para evitar errores

// Despues declaro una variable y que al instante se le asigna un valor, que sera dado por el usuario

    switch (rh) {
        case "A":
            alert("Podras donar a A y AB. Puedes recibir de A y O. ")
        break;
        case "B":
            alert("Podras donar a B y AB. Puedes recibir de B y O. ")
        break;
        case "AB":
            alert("Podras donar a AB. Puedes recibir de A, B, AB y O (receptor universal). ")
        break;
        case "O":
            alert("Podras donar a A, B, AB y O (donante universal). Puedes recibir de O. ")
        break;
        default:
            alert("Ingresa un  tipo de sangre valido, nosea pato e ingrese el que es")
    }
}

// Ejercicio condicional #9: En un curso, se evalúa a los estudiantes a través de tres notas parciales. El sistema calculará el promedio de estas tres notas (cada una entre 0 y 5) y determinará el nivel de desempeño del estudiante según la siguiente escala:

function calculoNotas () {
    
    alert("Este algoritmo se usara para calcular el promedio de tres notas (cada una entre 0 y 5) y determinará el nivel de desempeño del estudiante según la siguiente escala: ")

    let total = 0;

    // Reutilizamos el bucle for que usamos en el primer ejercicio, ahora se repitira 3 veces (una por cada nota)
    for (let i = 0; i < 3; ) {
        let nota = parseFloat(prompt("Ingresa la nota número " + (i + 1))); // Pedimos la nota al usuario
        if (nota >= 0 && nota <= 5) {                                       // Verificamos que la nota sea válida (entre 0 y 5)
            total = total + nota; // sumamos la nota al total, esto lo hacemos gracias a que cada vez que agreguemos una nota se sumara a la anterior que se agrego
            i++; // solo aumentamos si la nota fue válida
        } else {
            alert("Nota inválida. Debe estar entre 0 y 5."); // mensaje de error
        }
    }

    // Calculamos el promedio de las notas
    let promedio = total / 3;
    let nivelDesempeno = "";
    let mensajeDescriptivo = "";

    // Determinamos el nivel de desempeño según la escala
    if (promedio < 3.0) {
        nivelDesempeno = "Nivel Bajo";
        mensajeDescriptivo = "Requiere reforzar los conocimientos.";
    } else if (promedio >= 3.0 && promedio < 3.9) {
        nivelDesempeno = "Nivel Básico";
        mensajeDescriptivo = "Cumple con los aprendizajes fundamentales.";
    } else if (promedio >= 4.0 && promedio <= 4.5) {
        nivelDesempeno = "Nivel Alto";
        mensajeDescriptivo = "Demuestra un buen dominio de los contenidos.";
    } else { // promedio > 4.5
        nivelDesempeno = "Nivel Superior";
        mensajeDescriptivo = "Alcanza un desempeño sobresaliente.";
    }

    // Mostramos el resultado final al usuario
    alert(
        "Promedio de las notas: " + promedio + "\nNivel de Desempeño: " + nivelDesempeno + "\nMensaje: " + mensajeDescriptivo);

}

// Ejercicio condicional #10: Este algoritmo ayudara a una tienda a que aplique diferentes descuentos a sus clientes según su tipo, buscando fidelizar a los clientes frecuentes y VIP. El sistema debe solicitar al usuario el tipo de cliente que es nuevo, frecuente o vip y el valor total de su compra.

function descuentoCliente () {

    alert("Este algoritmo ayudara a una tienda a que aplique diferentes descuentos a sus usuarios según su tipo de cliente, este sistema solicitara al usuario el tipo de cliente que es nuevo, frecuente o vip y el valor total de su compra. ")

    // Solicitamos el tipo de cliente
    const tipoCliente = prompt("Ingrese el tipo de cliente ('nuevo', 'frecuente' o 'vip'):").toLowerCase(); //.tolowerCase sirve para que el usuario al ingresar una letra o una palabra en mayuscula la convertira ese texto en minusculas

    // Solicitamos el valor de la compra
    const valorCompra = parseFloat(prompt("Ingrese el valor total de su compra:"));

    // Validamos que el valor de la compra sea un número válido
    if (isNaN(valorCompra)) {
        alert("Error: El valor de la compra ingresado no es válido.");
        return; // Salimos de la función si el valor de la compra no es válido
    }

    let porcentajeDescuento = 0;
    let valorDescuento = 0;
    let valorTotalPagar = valorCompra;

    // Utilizamos la estructura switch case para determinar el descuento según el tipo de cliente 
    switch (tipoCliente) {
        case "nuevo":
            porcentajeDescuento = 0.05;
            descuento = 5
            break;
        case "frecuente":
            porcentajeDescuento = 0.10;
            descuento = 10
            break;
        case "vip":
            porcentajeDescuento = 0.20;
            descuento = 20
            break;
        default:
            alert("Error: El tipo de cliente ingresado no es válido.");
            return; // Salimos de la función si el tipo de cliente no es reconocido
    }

    // Calculamos el valor del descuento si el tipo de cliente es válido
    if (porcentajeDescuento > 0) {
        valorDescuento = (valorCompra * porcentajeDescuento);
        valorTotalPagar = valorCompra - valorDescuento;

        // Mostramos los detalles de la compra al cliente
        alert(
            "Tipo de Cliente: " + tipoCliente + "\n" + "Valor de la Compra: $" + valorCompra + "\n" + "Porcentaje de Descuento: " + descuento + "%\n" + "Monto del Descuento: $" + valorDescuento + "\n" +"Valor Total a Pagar: $" + valorTotalPagar
        );
    }

}

// Ejercicios con bucle while 

// Ejercicio #1: Este algoritmo debe permitir ingresar una serie de números hasta que el usuario introduzca el número 0. Por cada número, debe contar cuántos positivos y cuántos negativos se han ingresado (excluyendo el cero).

function numerosPositivosNegativos () {

    alert("Este sistema debera permitir ingresar una serie de números hasta que el usuario introduzca el número 0. Por cada número, debe contar cuántos positivos y cuántos negativos se han ingresado (excluyendo el cero).")

    let numero = parseFloat(prompt("Ingrese un número:"));
    let positivos = 0;
    let negativos = 0;

    // El bucle continúa mientras el número ingresado no sea 0
    while (numero !== 0) {
        if (!isNaN(numero)) { // Verificamos que la entrada sea un número
            if (numero > 0) {
                positivos ++; // Incrementamos el contador de positivos, no se por que, pero si no uso el ++ no me aumenta el contador :/
            } else if (numero < 0) {
                negativos ++;
            }
        } else {
            alert("Entrada inválida. Por favor, ingrese un número.");
        }
        numero = parseFloat(prompt("Ingrese otro número (0 para terminar):")); // Pedimos el siguiente número
    }

    // Mostramos el resultado final
    alert(
        "Total de números positivos ingresados: " + positivos + "\n" + "Total de números negativos ingresados: " + negativos
    );
}

// Ejercicio #2: Este algoritmo permitira al usuario ingresar su contraseña hasta 3 intentos. Si la contraseña correcta es "s3cret0", debe mostrar un mensaje de bienvenida. Si falla en los 3 intentos, debe bloquear el acceso.

function validadorContraseñas () {

    const contrasenaCorrecta = "s3cret0";
    const maxIntentos = 3;
    let intentos = 0;
    let accesoPermitido = true;

    alert("Sistema de acceso. Tienes " + maxIntentos + " intentos para ingresar la contraseña.");

    while (intentos < maxIntentos && accesoPermitido) {  // Este bucle 'while' sigue funcionando mientras no se acaben los intentos Y no haya entrado.
        const contrasenaIngresada = prompt("Intento " + (intentos + 1) + ": Ingresa la contraseña:");
        if (contrasenaIngresada === contrasenaCorrecta) {  // utilizamo el siguiente operador de comparacion '===' para que sea exactamente igual el tipo y el valor.
            alert("¡Bienvenido!");
            accesoPermitido = !true;  // Cambiamos la bandera a 'true' para que el bucle se detenga en la siguiente vuelta.
        } else {
            intentos++;
            if (intentos < maxIntentos) {
                alert("Contraseña incorrecta. Te quedan " + (maxIntentos - intentos) + " intentos.");
            }
        }
    }

    // Verificamos si se agotaron los intentos sin éxito
    if (accesoPermitido) {
        alert("Cuenta bloqueada por intentos fallidos.");
    }
}

// Ejercicio #3: Este algortimo permitira que los clientes puedan ingresar el valor de productos que van comprando. El sistema acumula los valores hasta llegar o superar los $100.000, momento en el cual termina y muestra el total y la cantidad de productos comprados.

function comprasMontoLimite () {

    alert(" Como usuario podras ingresar el valor de los productos que vas comprando. El sistema acumula los valores hasta llegar o superar los $100.000, momento en el cual termina y muestra el total y la cantidad de productos comprados.")

    let totalCompra = 0;
    let cantidadProductos = 0;

    // El bucle continúara mientras el total de la compra sea menor a $100.000
    while (totalCompra <= 100000) {
        const valorProducto = parseFloat(prompt("Ingrese el valor del siguiente producto:"));

        if (!isNaN(valorProducto)) { // Verificamos si el usuario ingresó un valor numérico válido
            if (valorProducto > 0) { // Ese valor que ingrese el usuario tendra que se mayo a 0
                totalCompra = valorProducto + totalCompra; // Cada ciclo que de el bucle se sumara el valor del anteriori producto con el nuevo hasta llegar a menor o igual $100.000
                cantidadProductos++;  //Cada ciclo que de el bucle se sumara +1 en la vaariable cantidadProductos
            } else if (valorProducto === 0) { // por si el ususario quiere ponerse chistosito
                alert("Ingresó 0. Debe ingresar numeros mayores a 0.");
            } else {
                alert("El valor del producto debe ser positivo."); // por si el ususario quiere ponerse chistosito
            }
        } else {
            alert("Entrada inválida. Por favor, ingrese un valor numérico.");
        }

        // Mostramos el total actual para que el usuario sepa cuánto falta (estoy pensando que es completamente ineccesario ._.)
        alert("Total actual de la compra: $" + totalCompra);
    }

    // Mostramos el resultado final
    alert("Monto total acumulado de la compra: $" + totalCompra + "\n" + "Cantidad de productos comprados: " + cantidadProductos);
}

// Ejercicio #4: Algoritmo que ayudara a un sistema educativo registrar estudiantes hasta completar un cupo máximo de 30 personas o hasta que el usuario decida detener el ingreso con una palabra clave ("fin"). 

function ingresoEstudiantes () {

    alert("Un sistema educativo registrara estudiantes hasta completar un cupo máximo de 30 personas o hasta que el usuario decida detener el ingreso con una palabra clave (fin). ")

    const cupoMaximo = 30;
    let cantidadEstudiantes = 0;
    let listaNombresEstudiantes = [];


    while (cantidadEstudiantes < cupoMaximo) {
        let nombreEstudiante = prompt("Ingrese el nombre del estudiante número " + (cantidadEstudiantes + 1) + " (o 'fin' para detener):");


        if (nombreEstudiante.toLowerCase() === "fin") { //.tolowerCase sirve para que el usuario al ingresar una letra o una palabra en mayuscula la convertira ese texto en minusculas
            alert("Registro de estudiantes detenido por el usuario.");
            break; // Condicioanal para que el usuario al ingresar la palabra clave "fin" termine el bucle o darle a cancelar en la ventana emergente
        } else if (nombreEstudiante > 0) {  // Agregue estas dos condicionales para evitar que ingresen valores numericos, no se como evitar que agreguen numeros o valores diferentes al alfabeto en cualquier parte del nombre :(
            alert("No puedes ingresar un valor numerico")
        } else if (nombreEstudiante < 0) {
            alert("No puedes ingresar un valor numerico")
        } else if (nombreEstudiante.trim() !== "") { //.trim sirve para elminar los espacios en blanco a lo que ingrese el usuario en el caso que el solo ingrese espacios,
            listaNombresEstudiantes.push(nombreEstudiante.trim()); // Agregamos el nombre a la lista,  la verdad esta monda toco con gemini, me tenia mamado
            cantidadEstudiantes++;
            alert("Estudiante '" + nombreEstudiante + "' registrado. Total estudiantes: " + cantidadEstudiantes);
        } else {
            alert("Por favor, ingrese un nombre válido.");
        }
    }

        alert("Registro de estudiantes finalizado. Se registraron " + cantidadEstudiantes + " estudiantes.");

    let lista = '';
    for (let i = 0; i < listaNombresEstudiantes.length; i++) {
        lista += (i + 1) + ". " + listaNombresEstudiantes[i] + "\n";
        }


        // Mostramos la lista de estudiantes al final
        if (listaNombresEstudiantes.length > 0) {
            alert("Lista de estudiantes registrados:\n" + lista);
        } else {
            alert("No se registró ningún estudiante.");
        }
}

// Ejercicio #5: Este algortimo simulara un cajero electrónico donde el sistema inicie con un saldo aleatorio entre $1.000.000 y $5.000.000. El usuario podra realziar retiros (restando al saldo) o transferencias entrantes (sumando al saldo). El sistema debera validar que los retiros no excedan el saldo disponible. Luego de cada operación, se preguntara si desea realizar otra transacción. Si el saldo llega a cero, solo se permiten transferencias. 

function cajeroElectronico () {
    
    let saldo = Math.floor(Math.random() * 5000000) + 1; // Creamos una variable que en su interior tenga math.floor que asegura que el numero que nos genere  sea un numero entero y math.random es aquel que nos entregara un numero aleatorio en los rangos que nosotros escogamos

    // Muestra una alerta de bienvenida con el saldo inicial formateado como moneda colombiana sin decimales.
    alert(`¡Hola! Saldo: $${saldo.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`); //Usamos el ${} para que se tome lo adentro de las llavees como codigo de javascript para que se ejecute y nos de un valor sin decimales y nos lo de como vemos la moneda corriente aqui en colombia
    while (true) {
        // Si el saldo es exactamente cero mostrara un mensaje indicando que solo se permiten transferencias entrantes.
        if (saldo === 0) {
            const ingresoStr = prompt("Saldo $0. Transferir (o 'no'):");
            if (!ingresoStr || ingresoStr.toLowerCase() === 'no') break; // Si el usuario ingresa algun valor string lo pasara a minusculas y si es 'no' sale del bucle y terminara el programa
            const ingreso = parseFloat(ingresoStr); // Intentara convertir la entrada del usuario a un número decimal, si la conversión es exitosa y el monto es mayor que cero suma el monto al saldo. si no, muestra un mensaje de monto inválido.
            if (ingreso > 0) saldo += ingreso;
            else alert("Monto inválido.");
            alert(`Nuevo saldo: $${saldo.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`);
            continue;
        }

        const opcion = prompt("1. Retirar\n2. Ingresar\n3. Salir"); // Si el saldo no es cero, preguntara al usuario qué desea hacer.
        if (opcion === '3' || opcion === null) break;    // Si el usuario elige '3' (salir) o cancela el prompt (opcion === null), sale del bucle.

        const monto = parseFloat(prompt(opcion === '1' ? "Retirar:" : "Ingresar:")); // Solicitara el monto a retirar o ingresar según la opción elegida Si el monto ingresado no es un número válido o es menor o igual a cero muestra un mensaje de monto inválido.
        if (isNaN(monto) || monto <= 0) {
            alert("Monto inválido.");
            continue;
        }

        // Utiliza una estructura switch para realizar la acción según la opción elegida.
        switch (opcion) {
            case '1': // Opción para retirar si el monto a retirar es menor o igual al saldo, resta el monto del saldo; de lo contrario, el saldo permanece igual.
            if (monto <= saldo) {
                saldo = saldo - monto;
                alert(`Retiro exitoso. Saldo: $${saldo.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`);
            } else {
                alert("Sin fondos.");
            }
            break;
            case '2': // Opción para ingresar la cual sumara el monto ingresado al saldo.
                saldo += monto;
                alert(`Ingreso exitoso. Saldo: $${saldo.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`);
                break;
            default: 
                alert("Opción inválida.");
        }
    }

    // Muestra un mensaje de agradecimiento al finalizar la interacción.
    alert("Gracias por usar el cajero.");

}

// Ejercicios con bucle for

// Ejercicio #6: Este algoritmo hara una tabla de Multiplicar personalizada el usuario ingresa un número y el sistema imprime su tabla de multiplicar del 1 al 20.

function tablaMultiplicar () {

    alert("Este sistema genera la tabla de multiplicacion de un numero hasta 20")

let numero = parseFloat(prompt('Ingrese un numero por favor')) // Le pedimos al usuario que ingrese el valor que el desea
let resultado = ''  // Creamos una variable que este vacia con las '' para mas adelante agregar informacion a ese espacio 
    for(let i = 1 ; i <= 20 ; i = i + 1){  
        resultado += numero + ' x ' + i + ' = ' + (numero * i) + '\n' // Generamos el for que se repetira 20 veces, en cada bucle "resultado +=..." alimentara la lista las veces que se repita el bucle 
}
alert('Los multiplos del numero # ' + numero + ' son:\n'+ resultado
)
}

// Ejercicio #7: Este algoritmo sumara los primeros numeros naturales. El usuario indica cuántos números quiere sumar (ej: 5) y el sistema calcula la suma de 1 + 2 + 3 + ... + N.

function sumaNaturales () {

    alert("Este algoritmo sumara los primeros numeros naturales. El usuario indica cuántos números quiere sumar (ej: 5) y el sistema calcula la suma de 1 + 2 + 3 + ... + N.")
    const N = parseInt(prompt('Ingrese un entero positivo para sumar los primeros N naturales:'));
    if (isNaN(N) || N <= 0) return alert("Ingrese un entero positivo válido."); // Condicional que verifica que el valor ingresado sea un valor numerico y sea meno a cero, de no cumplirse arrojara el alert y cancelara la operacion.

    let secuencia = ''; // Creamos un variable con un espacio vacio para que sea utilizado para llevar acabo la suma de los numeros naturales 
    let suma = 0;   
    for (let i = 1; i <= N; i++) {
        suma += i;
        secuencia += i + (i < N ? ' + ' : ''); // En esta linea de codigo, hacemos que tome el numero actual y lo convierte en una cadena de texto y lo añade a la cadena "secuencia", luego verifica si i es menor a N si se cumple se agrega a la cadena "+" si no se llega a cumplir agrega un valor vacio ""
    }

    alert(`La suma de los primeros ${N} naturales (${secuencia}) es: ${suma}`);
}

// Ejercicio #8: Algortimo que contara el numero de caracteres en cada palabra que el usuario ingrese, el usuario indicara cuántas palabras ingresará. Por cada una, el sistema muestra cuántos caracteres tiene. 

function contadorCaracteres () {

    alert("Este algoritmo funcionara para contar el numero de caracteres que hay en cada palabra que ingreses, ahora bien el usuario debera ingresar el numero de palabras que a posteriori ingresara")

        let numeroPalabras = parseInt(prompt("¿Cuantas palabras desea ingresar?"));

    for(let i = 1; i <=numeroPalabras; i = i + 1){

        let palabra = prompt("Ingrese la palabra #" + i + ":");
        let cantidadCaracteres = palabra.length;

        alert("La palabra: " + palabra + "\n tiene un total de " + cantidadCaracteres + " caracteres.");
    }

}

// Ejercicio #9: Algoritmo que generara una secuencia de números pares, El sistema genera y mostrara los primeros N números pares (empezando desde 2).

function generadorPares () {
    alert("Este sistema genera y mostrara los primeros N números pares (empezando desde 2)")

    const cantidadPares = parseInt(prompt('¿Cuántos números pares desea (empezando desde 2)?'));
    if (isNaN(cantidadPares) || cantidadPares <= 0) return alert("Ingrese un entero positivo válido."); // Condicional que verifica que el valor ingresado sea un valor numerico y sea menor a cero, de no cumplirse arrojara el alert y cancelara la operacion.

    let resultado = ''; // Creamos un variable con un espacio vacio para que sea utilizado para llevar acabo la lista de numero pares generados 
    for (let i = 1; i <= cantidadPares; i++) {
        resultado += (i * 2) + '\n'; // // En esta linea de codigo, hacemos que tome el valor del contador para que lo multiplique por dos y nos de el numero par y lo convierte en una cadena de texto y lo añade a la cadena.
    }

    alert(`Los primeros ${cantidadPares} números pares son:\n${resultado}`);
}

// Ejercicios con Arreglos 

// Ejercicio arreglo #1: Registro de notas y cálculo del promedio general Descripción: El sistema solicita ingresar el nombre de un estudiante y luego permite registrar las notas de 5 materias. Al finalizar, muestra cada materia con su respectiva nota y calcula el promedio general. Si alguna nota es inferior a 3.0, el estudiante queda en riesgo académico.

function registrosNotasPromedio () {

    alert("El sistema solicitara al usuario ingresar el nombre del estudiante y luego permitira registrar las notas de 5 materias. Al finalizar, mostrara cada materia con su respectiva nota y calcula el promedio general.")

    let nombre = prompt("Ingrese el nombre del estudiante:");
    let materias = [];
    let notas = [];

    for (let i = 1; i <= 5; i++) {
        let materia = prompt("Ingrese la materia número " + i);
        let nota = parseFloat(prompt("Ingrese la nota de " + materia));
        materias.push(materia);
        notas.push(nota);
    }

    for (let i = 0; i < materias.length; i++) {
        if(notas[i]<3){
            alert("El estudiante " + nombre + " se encuentra en riesgo académico en la materia de "+  materias[i] + " ya que obtuvo una calificación de " + notas[i]);
        }
        else{
            alert("El estudiante " + nombre + " esta bien en la materia de "+  materias[i] + " ya que obtuvo una calificación de " + notas[i]);
        }
        
    }
    
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    let promedio = suma / notas.length;
    if (promedio<3){
        alert("El estudiante " + nombre + " no aprobara el año ya que su promedio fue: " + promedio);
    }else{
        alert("El estudiante se gradua con un promedio de: " + promedio)
    }
}

// Ejercicio arreglo #2: Inventario básico de productos Se simula un inventario con una lista de productos. Cada producto tiene nombre y cantidad disponible. El usuario puede consultar productos, vender (restar) o reabastecer (sumar). El sistema se actualiza tras cada operación y permite realizar múltiples acciones hasta que se decida salir.

function inventarioBasico () {

}

// Ejercicio arreglo #3: Encuesta de satisfacción con resultados El programa realiza una encuesta a 10 usuarios sobre un servicio (escala de 1 a 5). Al finalizar, muestra cuántas personas votaron por cada número y el promedio de satisfacción general. También indica si la mayoría se mostró satisfecha (4 o más).

function encuestaSatisfaccion () {

    alert("Este programa realizara una encuesta a 10 usuarios sobre un servicio (escala de 1 a 5). Al finalizar, mostrara cuantas personas votaron por cada número y el promedio de satisfacción general. También indica si la mayoría se mostró satisfecha (4 o más)")

    const usuarios = 10;
    const valoraciones = [];
    let vota1 = 0;
    let vota2 = 0;
    let vota3 = 0;
    let vota4 = 0;
    let vota5 = 0;

    for (let i = 1; i <= usuarios; i++ ) {
        let votos = parseInt(prompt("Usuario # " + (i) + " ingresa la calificacion que tienes sobre nuestro servicio"))
            if (votos > 0 && votos <= 5) {
                }else {
                    alert("Ingresaste un valor invalido al permitido en la encuesta")
                    return;
                }
            valoraciones.push(votos)
            switch (votos) {
            case 1:
                    vota1=vota1+1
                break;
            case 2:
                    vota2=vota2+1                
                break;
            case 3:
                    vota3=vota3+1                
                break;
            case 4:
                    vota4=vota4+1                
                break;
            case 5:
                    vota5=vota5+1                
                break;        
        }
    }
    alert("De las 10 personas que votaron, " + vota1 + " nos dieron una valoracion de 1")
    alert("De las 10 personas que votaron, " + vota2 + " nos dieron una valoracion de 2")
    alert("De las 10 personas que votaron, " + vota3 + " nos dieron una valoracion de 3")
    alert("De las 10 personas que votaron, " + vota4 + " nos dieron una valoracion de 4")
    alert("De las 10 personas que votaron, " + vota5 + " nos dieron una valoracion de 5")

    let promedio = 0
    promedio=(((vota1 * 1)+(vota2 * 2)+(vota1 * 3)+(vota4 * 4)+(vota5 * 5))/((vota1) + (vota2) + (vota3) + (vota4) + (vota5)))

    if(promedio>3.9){
        alert("La satisfaccion general es positiva teniendo en cuenta el resultado de:  " + promedio)
        }
        else{
        alert("La satisfaccion general es negativa teniendo en cuenta el resultado de:  " + promedio)
        }
}

// Ejercicio arreglo #4: Análisis de temperaturas semanales Descripción: Se proporciona un arreglo con las temperaturas registradas durante una semana: [22, 24, 21, 23, 25, 26, 22]. El programa debe calcular la temperatura promedio, mostrar la más alta, la más baja, y cuántos días superaron los 23 grados.

function analisisTemperaturas () {

    alert("Se proporciona un arreglo con las temperaturas registradas durante una semana: [22, 24, 21, 23, 25, 26, 22]. El programa debe calcular la temperatura promedio, mostrar la más alta, la más baja, y cuántos días superaron los 23 grados. ")
    
    const temperaturas = [22, 24, 21, 23, 25, 26, 22];
    let masAltas = 0;
    let tempMin = temperaturas[0];
    let tempMax = temperaturas[0];
    let suma = 0;
    
    for (let i = 0; i < temperaturas.length; i++) {
        suma = suma + temperaturas[i]
            if (temperaturas[i] < tempMin){
                tempMin = temperaturas[i] 
            } else if (temperaturas[i] > tempMax)
                    tempMax = temperaturas[i]
}

    for (let i = 0 ; i < temperaturas.length; i++) {
        if (temperaturas[i] > 23) {
            masAltas = masAltas + 1
        }
}

    let promedio = suma / temperaturas.length

    alert("La temperatura mas alta es de " + tempMax + "°C" + "\nLa temperatura mas baja es de " + tempMin + "°C" + "\nLos dias que superaron los 23°C es un total de " + masAltas + "\nEl promedio de las temperaturas es " + promedio + "°C")

}

// Ejercicio arreglo #5: Filtrado de estudiantes aprobados, dado el arreglo de calificaciones de estudiantes: [4.5, 2.9, 3.7, 1.8, 4.2, 3.0, 2.5, 5.0] El sistema debe mostrar solo las notas aprobadas (mayores o iguales a 3.0), indicar cuántos aprobaron y cuántos no, y calcular el promedio de los aprobados.

function filtroEstudiantes () {

    alert("Este algoritmo hara como filtro de unos estudiantes para saber si aprobaron o  no, dado el arreglo de calificaciones de estudiantes: [4.5, 2.9, 3.7, 1.8, 4.2, 3.0, 2.5, 5.0] El sistema debera mostrar solo las notas aprobadas (mayores o iguales a 3.0), indicar cuántos aprobaron y cuántos no, y calcular el promedio de los aprobados.")
    
    const notas = [4.5, 2.9, 3.7, 1.8, 4.2, 3.0, 2.5, 5.0];
    let suma = 0;
    let aprobados = 0;
    let reprobados = 0;
    
    for (let i = 0; i < notas.length; i++) {
            if (notas[i] >= 3.0){
                suma = suma + notas[i]
                aprobados = aprobados + 1
            } else
                    reprobados = reprobados + 1

}

    let promedio = suma / aprobados

    alert("La cantidad de estudiantes que aprobaron son " + aprobados + "\n La cantidad de estudiantes que reprobaron fueron: " + reprobados + "\n La nota promedio de todos los estudiantes fue de: " + promedio.toFixed(2))
}

// Ejercicios con objetos

// Ejercicio objeto #1: Registro de usuario y validación de acceso Descripción: El sistema permite registrar un usuario (nombre, correo, contraseña). Luego, pide que se inicien sesión ingresando los datos. Si coinciden, se da acceso. Si no, se permite reintentar hasta 3 veces. 

function registroUsuario () {

    alert("Ejercicio objeto #1: Registro de usuario y validación de acceso Descripción: El sistema permite registrar un usuario (nombre, correo, contraseña). Luego, pide que se inicien sesión ingresando los datos. Si coinciden, se da acceso. Si no, se permite reintentar hasta 3 veces. ")

    let usuarios = [];
    let cantidadUsuarios = 1;

    // Parte 2: solicitar los datos de los diferentes usuarios
    for (let i = 0; i < cantidadUsuarios; i++) {
        let variableNombre = prompt("Ingrese el nombre del usuario N°" + (i + 1));
        let variableEmail = prompt("Ingrese el email del usuario N°" + (i + 1));
        let variableClave = prompt("Ingrese la clave del usuario N°" + (i + 1));

        // Creamos el objeto y lo agregamos al arreglo
        usuarios.push({
            nombre: variableNombre,
            email: variableEmail,
            clave: variableClave,
        });
    }

    // Intentos de inicio de sesión (hasta 3)
    let intentos = 0;
    let usuarioEncontrado = null;

    while (intentos < 3 && !usuarioEncontrado) {
        let correoIngresado = prompt("Ingrese el correo con el que desea iniciar sesión");
        let claveIngresada = prompt("Ingrese la contraseña con la que desea iniciar sesión");

        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].email === correoIngresado && usuarios[i].clave === claveIngresada) {
                usuarioEncontrado = usuarios[i];
                break;
            }
        }

        if (!usuarioEncontrado) {
            intentos++;
            alert("Usuario o contraseña incorrectos. Intento " + intentos + " de 3.");
        }
    }

    if (usuarioEncontrado) {
        alert("BIENVENIDO " + usuarioEncontrado.nombre);
    } else {
        alert("Acceso denegado. Excediste el número de intentos.");
    }
}

// Ejercicio objeto #2: Agenda de contactos crear un sistema donde el usuario puede registrar hasta 5 contactos, cada uno con nombre, número y correo. Luego, puede consultar un contacto por nombre y editar sus datos si lo desea. 

function agendaContactos () {

    alert("Agenda de contactos crear un sistema donde el usuario puede registrar hasta 5 contactos, cada uno con nombre, número y correo. Luego, puede consultar un contacto por nombre y editar sus datos si lo desea. ")

    let contactos = [];

    // Realizamos un for con fin de registrar los contactos al inicio del algoritmo, pero le agregue una condicional que si el usuario no quiere agregar mas contactos agregue un no y se cancela el bucle, de no ser asi el bucle se hata 5 veces
    for (let i = 0; i < 5; i++) {
        let nombre = prompt("Ingrese el nombre del contacto #" + (i + 1));
        let numero = prompt("Ingrese el número de teléfono de " + nombre);
        let correo = prompt("Ingrese el correo electrónico de " + nombre);

        contactos.push({
            nombre: nombre,
            numero: numero,
            correo: correo
        });

        let continuar = prompt("¿Desea agregar otro contacto? (sí/no)").toLowerCase();
        if (continuar !== "sí" && continuar !== "si") {
            break;
        }
    }

    // Declaramos dos variables para que en una se agregue el nombre que el usuario de see buscar, y otra con una valor null(vacio), despues hacemos un bucle que recorra el objeto donde se agregaron los contactos guardados por el usuario buscando el contacto ingresado y al momento de encontrarlo se detenga.
    let buscarNombre = prompt("Ingrese el nombre del contacto que desea buscar:");

    let contactoEncontrado = null;

    for (let i = 0; i < contactos.length; i++) {
        if (contactos[i].nombre.toLowerCase() === buscarNombre.toLowerCase()) {
            contactoEncontrado = contactos[i];
            break;
        }
    }

    // Despues agregamos una condicional despues del for que recorre el objeto, con el fin de que el valor cambie a ser valor no-vacio nos genere un alert con su nombre y correo.
    if (contactoEncontrado) {
        alert("Contacto encontrado:\nNombre: " + contactoEncontrado.nombre + 
            "\nNúmero: " + contactoEncontrado.numero + 
            "\nCorreo: " + contactoEncontrado.correo);

    // Despues declaramos una variable solicitandole al usuario la posibilidad de editar el contacto encontrado, si nos da un si procede con el cambio (obviamente) de no ser asi le arroja el mensaje de que no se realizaron cambios.
        let editar = prompt("¿Desea editar este contacto? (sí/no)").toLowerCase();
        if (editar === "sí" || editar === "si") {
            contactoEncontrado.nombre = prompt("Nuevo nombre (anterior: " + contactoEncontrado.nombre + "):");
            contactoEncontrado.numero = prompt("Nuevo número (anterior: " + contactoEncontrado.numero + "):");
            contactoEncontrado.correo = prompt("Nuevo correo (anterior: " + contactoEncontrado.correo + "):");

            alert("¡Contacto actualizado con éxito!");
        } else {
            alert("No se realizaron cambios.");
        }
    } else {
        alert("Contacto no encontrado."); // Si al final de esta condicional no se encontro el cliente no da este alert y se terminaria el algoritmo.
    }
}

// Ejercicio objeto #3: Sistema de compras con carrito el usuario puede agregar productos a un carrito de compras. Cada producto es un objeto con nombre, precio y cantidad. Al finalizar, se muestra el total a pagar y un resumen de los productos. 

function sistemaCompras () {

    alert("Sistema de compras, Podrás agregar productos a un carrito de compras. Al finalizar, verás un resumen detallado y el total a pagar.");

    let carrito = [];
    let agregarOtro = "sí";

    // Empezamos el algoritmo con un bucle while, donde el usuario al iniciar el algortimo le mostra la obcion de agregar el nombre del producto que valor tiene y la cantidad que compro, despues de que el usuario agregue el primer producto guardara esa informacion en el arreglo carrito, que se guardara como un objeto, despues se le dara la obcion de agregar mas productos si el escribe si, reiniciara el bucle, ahora en el bucle while agregue un if (condicional) donde los valores que ingrese el usuario en los valores de precio y cantidad, sean verificados que sean valores numericos y que sean mayores a 0 o iguales si, el caso que no cumplan con esos valores le dara un alert, si se cumple continuara con el bucle.

    while (agregarOtro === "sí" || agregarOtro === "si") {
        let nombreProducto = prompt("Ingrese el nombre del producto:");
        let precioProducto = parseFloat(prompt("Ingrese el precio unitario del producto:"));
        let cantidadProducto = parseInt(prompt("Ingrese la cantidad del producto:"));

        if (isNaN(precioProducto) || isNaN(cantidadProducto) || precioProducto < 0 || cantidadProducto <= 0) {
            alert("Datos inválidos. Intenta nuevamente.");
            continue;
        }

        carrito.push({
            nombre: nombreProducto,
            precio: precioProducto,
            cantidad: cantidadProducto
        });

        agregarOtro = prompt("¿Desea agregar otro producto? (sí/no)").toLowerCase();
    }

    // Despues declaramos dos variables, una para que se guarde el resumen de toda la compra y la otra para mostrar el total, realizamos un for con la idea que recorra el arreglo (carrito) para que ubique los productos en el, cada vez que se ubique en un producto traera la informacion del nombre, precio y cantidad que puso el usuario, calculamos el valor de la compra total de ese producto, despues se mostrara en un alert el total de la compra que realizo el usuario, donde se mostrara el nombre del producto, el calculo de la compra y un total general de toda la compra

    let total = 0;
    let resumen = "Resumen del carrito:\n";

    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        let subtotal = producto.precio * producto.cantidad;
        total += subtotal;
        resumen += "- " + producto.nombre + " | $" + producto.precio.toFixed(2) + " x " + producto.cantidad + " = $" + subtotal.toFixed(2) + "\n";
    }

    resumen += "\nTotal a pagar: $" + total.toFixed(2);

    alert(resumen);
}

// Ejercicio objeto #4: Catálogo de películas Descripción: Se tiene el siguiente arreglo de objetos con información de películas: 
// const peliculas = [ 
// { titulo: "Inception", genero: "Ciencia ficción", año: 2010 }, 
// { titulo: "Titanic", genero: "Romance", año: 1997 }, 
// { titulo: "Interstellar", genero: "Ciencia ficción", año: 2014 }, 
// { titulo: "Coco", genero: "Animación", año: 2017 } 
// ]; 
// El sistema debe permitir al usuario: 
// ● Buscar películas por género. 
// ● Listar las películas estrenadas después del año 2000. 

function catalogoPeliculas () {

    alert("Catálogo de películas\nDescripción: Podrás buscar películas por género y ver las que fueron estrenadas después del año 2000.");

    const peliculas = [ 
        { titulo: "Inception", genero: "ciencia ficcion", año: 2010 }, 
        { titulo: "Titanic", genero: "romance", año: 1997 }, 
        { titulo: "Interstellar", genero: "ciencia ficcion", año: 2014 }, 
        { titulo: "Coco", genero: "animacion", año: 2017 } 
    ];

    // Primero declaramos una variable que recibira el prompt del usuario solicitandole el genero que desea, luego creamos un arreglo donde se guardara el genero que busco el usuario, luego de eso realizamos un for que recorra el arreglo de peliculas con el fin de que encuentre un valor igual al que ingreso el usuario (genero) si encuentra un genero igual lo guardara en el arreglo de peliculasPorGenero con la posicion de la pelicula(s) que coninciden.

    let generoBuscado = prompt("Ingrese el género de películas que desea buscar:").toLowerCase();
    let peliculasPorGenero = [];

    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].genero.toLowerCase() === generoBuscado) {
            peliculasPorGenero.push(peliculas[i]);
        }
    }

    // pasado lo anterior creamos un condicional que cuente la longitud del arreglo de peliculasPorGenero si la longitud es mayor a cero continuara declarando la variable resultadoGenero, despues continua con un bucle for que se repetira las veces que se cumpla la condicion de contador menor a arreglo de peliculasPorGenero, nos dara el mensaje de resultadoGenero gracias a la concatenacion nos dara un mensaje mas claro de cara al usuario, de no ser asi nos dara el alert de "No se encontraron peliculas..."
    if (peliculasPorGenero.length > 0) {
        let resultadoGenero = "Películas del género '" + generoBuscado + "':\n";
        for (let i = 0; i < peliculasPorGenero.length; i++) {
            resultadoGenero += "- " + peliculasPorGenero[i].titulo + " (" + peliculasPorGenero[i].año + ")\n";
        }
        alert(resultadoGenero);
    } else {
        alert("No se encontraron películas del género '" + generoBuscado + "'.");
    }

    // realizamos un for tomando en base al primer for pero enves de que la condicional sea comparar dos valores, sea comparando todos los valores de año (.año) donde se estreno las peliculas sean mayores a 2000 una vez eso se cumpla se agregan las posiciones al arreglo peliculasRecientes, despues de eso se declara una variable donde se dara el resultado, despues se hace un for para que dependiendo de la longitud del arreglo (peliculasRecientes) se ejecute y de el mensaje de las peliculas despues del 2000

    let peliculasRecientes = [];

    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].año > 2000) {
            peliculasRecientes.push(peliculas[i]);
        }
    }

    let resultadoRecientes = "Películas estrenadas después del año 2000:\n";
    for (let i = 0; i < peliculasRecientes.length; i++) {
        resultadoRecientes += "- " + peliculasRecientes[i].titulo + " (" + peliculasRecientes[i].año + ", " + peliculasRecientes[i].genero + ")\n";
    }

    alert(resultadoRecientes);
}

// Ejercicio objeto #5: Registro de vehículos y búsqueda por placa Descripción: Se tiene un arreglo de vehículos registrados: 
// const vehiculos = [ 
// { placa: "ABC123", marca: "Toyota", modelo: 2020 }, 
// { placa: "XYZ789", marca: "Chevrolet", modelo: 2018 }, 
// { placa: "LMN456", marca: "Ford", modelo: 2022 } 
// ]; 
// El programa debe permitir al usuario ingresar una placa, buscar el vehículo correspondiente y mostrar sus datos. Si no existe, debe mostrar un mensaje de error.

function registroVehiculos () {

    alert("Registro de vehículos\nDescripción: Podrás buscar un vehículo ingresando su placa. Si existe, se mostrarán sus datos; de lo contrario, se mostrará un mensaje de error.");

    const vehiculos = [ 
        { placa: "ABC123", marca: "Toyota", modelo: 2020 }, 
        { placa: "XYZ789", marca: "Chevrolet", modelo: 2018 }, 
        { placa: "LMN456", marca: "Ford", modelo: 2022 } 
    ];

    // Empezamos declarando una varibale(placaBuscada) donde se guardar lo ingresado por el usuario en el prompt, despues declaramos otra variable donde guardara un valor null(vacio) despues hacemos un for que recorrera el arreglo(vehiculos) donde se ejecutara la cantidad de objetos que tenga el arreglo, donde si se cumple la condicion del for empezara a comparar todos las claves(placa) con la variable placaBuscada, de encontrarse un igual el valor de la variable vehiculoEncontrado pasara de null(vacio) a el valor de de la placa encontrada al momento que se encuentra se activa el break y se interrumpe el bucle, despues ponemos una condicional donde si el vehiculoEncontrado es un valor diferente a null(vacio) seguira a declarar una variable donde mostrara el resultado con todos los datos que viene con la placa encontrada, de no cumplirse con ninguna de las condiciones dara el mensaje de error.

    let placaBuscada = prompt("Ingrese la placa del vehículo que desea buscar:").toUpperCase(); //usamos el .toUpperCase para que si el usuario agrega un valor string en minusculas lo pasara a mayusculas
    
    let vehiculoEncontrado = null;

    for (let i = 0; i < vehiculos.length; i++) {
        if (vehiculos[i].placa === placaBuscada) {
            vehiculoEncontrado = vehiculos[i];
            break;
        }
    }

    if (vehiculoEncontrado !== null) {
        let resultado = "Vehículo encontrado:\n";
        resultado += "- Placa: " + vehiculoEncontrado.placa + "\n";
        resultado += "- Marca: " + vehiculoEncontrado.marca + "\n";
        resultado += "- Modelo: " + vehiculoEncontrado.modelo;
        alert(resultado);
    } else {
        alert("No se encontró ningún vehículo con la placa '" + placaBuscada + "'.");
    }
}



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("boton1").addEventListener("click", rendimientoEstudiante);
    document.getElementById("boton2").addEventListener("click", clasificacionEtapas);
    document.getElementById("boton3").addEventListener("click", conversorTiempo);
    document.getElementById("boton4").addEventListener("click", menuInteractivo);
    document.getElementById("boton5").addEventListener("click", calculoDeTarifa);
    document.getElementById("boton6").addEventListener("click", clasificacionSalud);
    document.getElementById("boton7").addEventListener("click", calculadoraSueldo);
    document.getElementById("boton8").addEventListener("click", clacificacionSangre);
    document.getElementById("boton9").addEventListener("click", calculoNotas);
    document.getElementById("boton10").addEventListener("click", descuentoCliente);
    document.getElementById("boton11").addEventListener("click", numerosPositivosNegativos);
    document.getElementById("boton12").addEventListener("click", validadorContraseñas);
    document.getElementById("boton13").addEventListener("click", comprasMontoLimite);
    document.getElementById("boton14").addEventListener("click", ingresoEstudiantes);
    document.getElementById("boton15").addEventListener("click", cajeroElectronico);
    document.getElementById("boton16").addEventListener("click", tablaMultiplicar);
    document.getElementById("boton17").addEventListener("click", sumaNaturales);
    document.getElementById("boton18").addEventListener("click", contadorCaracteres);
    document.getElementById("boton19").addEventListener("click", generadorPares);
    document.getElementById("boton20").addEventListener("click", registrosNotasPromedio);
    document.getElementById("boton21").addEventListener("click", encuestaSatisfaccion);
    document.getElementById("boton22").addEventListener("click", analisisTemperaturas);
    document.getElementById("boton23").addEventListener("click", filtroEstudiantes);
    document.getElementById("boton24").addEventListener("click", registroUsuario);
    document.getElementById("boton25").addEventListener("click", agendaContactos);
    document.getElementById("boton26").addEventListener("click", sistemaCompras);
    document.getElementById("boton27").addEventListener("click", catalogoPeliculas);
    document.getElementById("boton28").addEventListener("click", registroVehiculos);

});