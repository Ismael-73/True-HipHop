
function practica1(){
    var numero;
    numero= prompt ("¿Cual es tu numero favorito?");
    alert("Tu numero favorito es " +numero)
}

function practica2a(){
    var nombre
    var apellidop;
    var apellidom;
    var nombrecom;

    nombre= prompt ("Nombre: ");
    apellidop=prompt("Apellido Paterno:");
    apellidom=prompt("Apellido Materno:");

    nombrecom= nombre + " " + apellidop + " " + apellidom;
    alert("Tu nombre completo es:"+nombrecom);
}

function practica2b(){
    numero1= Number(prompt("Dame el primer numero: "));
    numero2= Number(prompt("Dame el segundo nuero: "));

    resultado=numero1+numero2;

    alert("La suma de los numero es: " + resultado)
}

function practica2c(){
    var valor= {
        "si":true,
        "no":false
    } [prompt ("¿Eres estudiante? (si/no)")];

    alert("El valor ingresado es: " +valor)
}

function practica2d(){
    var colores=["rojo","verde", "azul","amarillo","gris"]; 
    var ColorElegido=prompt("Cuál es tu color favorito? \n Opciones: " +colores.join(", "))
    alert("Color: "+ ColorElegido);
}

function practica2e(){
    var arregloEdad=[];
    arregloEdad[0]=parseInt(prompt("¿Cual es la edad de la primera persona: "));
    arregloEdad[1]=parseInt(prompt("¿Cual es la edad de la segunda persona: "));
    var SumaEdades=arregloEdad[0]+arregloEdad[1];

    alert("La suma de las edades de las dos personas es de: "+SumaEdades)
} 

function practica3a(){
    var mivariable=prompt("Ingresa un numero");
    if (mivariable<10){
        alert("El numero es menor que 10");
    }
    if(mivariable>10)
    {
        alert("El numero es mayor a 10");
    }


}
function practica3b(){
    var NumeroSecreto=prompt("¡Adivina el numero secreto! Te dare una pista esta entre el rango 1 a 10 ¿Cual es el numero?")

    if(NumeroSecreto>10 ||  NumeroSecreto<=0){
        alert("Recuerda que el numero esta entre el 1 y el 10, intenta de nuevo");
    }
    else{
            if(NumeroSecreto==7){
                alert("Felicidadeees has adivinado el numero, magazo");
            }
            else{
                if(NumeroSecreto>7)
                {
                    alert("Te pasastes un poco el numero secreto es menor a tu numero, intenta de nuevo");
                }
                else
                {
                    alert("Te falta un poco mas, el numero secreto es mayor a tu numero");
                }
            }
    }

}
function practica4a(){
    var mivariable=8;
    switch(mivariable){
        case 5:
            alert("El numero es cinco");
            break;
        case 8:
            alert("El numero es 8");
            break;
        case 10:
            alert("El numero es 10");
            break;
        default:
            alert("El numero es: "+mivariable);
    }
}
function practica4b(){
    var numero1=Number(prompt("Dame el primer numero de la operación"));
    var numero2=Number(prompt("Dame el segundo numero para la operacion"));
    var Operacion=prompt("¿Que operacion deseas realizar? (Ingresa el simbolo de la operacion: Suma= +, Resta= -,Multiplicacion= *,Division= /)");
    var resultado;
    switch(Operacion){
        case "+":
            resultado=numero1+numero2;
            alert("El resultado de tu operación es de: "+resultado);
            break;
        case "-":
            resultado=numero1-numero2;
            alert("El resultado de tu operación es de: "+resultado);
            break;
        case "*":
            resultado=numero1*numero2;
            alert("El resultado de tu operación es de: "+resultado);
            break;
        case "/":
            resultado=numero1/numero2;
            alert("El resultado de tu operación es de: "+resultado);
            break;
        default:
            alert("Por favor ingresa la operación correctamente")

    }

}

function practica5a(){
    var Numero= Math.floor(Math.random()*10)+1;
    for( i=0;i<=2;i++){
        var NumeroSecreto=prompt("¡Adivina el numero secreto! Te dare una pista esta entre el rango 1 a 10 ¿Cual es el numero?")
        if(NumeroSecreto>10 ||  NumeroSecreto<=0){
        alert("Recuerda que el numero esta entre el 1 y el 10, intenta de nuevo");
        if(i==2)
        {
            i=0;
        }
    }
    else{
            if(NumeroSecreto==Numero){
                alert("Felicidadeees has adivinado el numero, magazo");
                i=11;
            }
            else{
                if(NumeroSecreto>Numero)
                {
                    alert("Te pasastes un poco el numero secreto es menor a tu numero, intenta de nuevo");
                    if(i=2)
                    {
                        i=0;
                    }
                }
                else
                {
                    alert("Te falta un poco mas, el numero secreto es mayor a tu numero");
                    if(i=2)
                    {
                        i=0;
                    }
                }
            }
        }
    }
}

function practica6a(){
        var contador=0;
        while(contador<100){
            contador++
        }
        alert("El valor es: "+contador)
    }


function practica6b(){
    
    alert("¡UN VERDADERO JUEGO DE AZAR! \n¿Te sientes con suerte? \n¡Ven y averigualo!")
    var jugadores=Number(prompt("Todo listo... PERO ANTES\n¿De cuantos jugadores sera el juego?"))
    var listajugadores=[]
    var puntaje=[]
    var Puntajefinal=false
    for(x=0;x<jugadores;x++)
    {
        j=x+1
        nombre=prompt("Personaliza tu jugador y dale un nombre unico a la suerte \nAgrega un nombre al jugador "+j)
        listajugadores.push(nombre);
        puntaje.push(0)
    }
    alert("¡BIENVENIDOS AL JUEGO DEL AZAR!\nLos Jugadores registrados son: \n\n"+ listajugadores.join("\n"));

    var limite=Number(prompt("¿Cual sera el puntaje maximo para que algun jugador gane?"))
    while( Puntajefinal==false)
    {

       for(i=0;i<jugadores;i++)
       {
        var Dado=Math.floor(Math.random()*6)+1
        alert("Suerte al tirar tu dado " +listajugadores[i]+ "\n¡QUE TENGAS SUERTE!")
        var puntajes=puntaje[i]+Dado
        puntaje[i]=puntajes
        alert("" +listajugadores[i] + "\n Sacaste en tu dado: "+Dado+ "\nTienes un puntaje: "+puntaje[i]+ " Falta menoooos")
        
        if(puntaje[i]>=limite)
            {
                Puntajefinal=true
                alert("Felicidades has ganado: "+listajugadores[i]+ " ¡ERES UN VERDADERO CRACK,GENIO,BESTIA,IMPARABLE,TRIUNFADOR,ELEGANTE,DERROCHADOR,LITERAL UN DIOS UN VERDADERO CRACK")
                break;
            }
       }
    }
    
   
}
function practica6c()
{

    alert("¡UN VERDADERO JUEGO DE AZAR! \n¿Te sientes con suerte? \n¡Ven y averigualo!")
    var jugadores=Number(prompt("Todo listo... PERO ANTES\n¿De cuantos jugadores sera el juego?"))
    var listajugadores=[]
    var puntaje=[]
    var Puntajefinal=false
    for(x=0;x<jugadores;x++)
    {
        j=x+1
        nombre=prompt("Personaliza tu jugador y dale un nombre unico a la suerte \nAgrega un nombre al jugador "+j)
        listajugadores.push(nombre);
        puntaje.push(0)
    }
    alert("¡BIENVENIDOS AL JUEGO DEL AZAR!\nLos Jugadores registrados son: \n\n"+ listajugadores.join("\n"));

    var limite=Number(prompt("¿Cual sera el puntaje maximo para que algun jugador gane?"))

    alert("ULTIMA REGLA DEL JUEGO EL ORDEN SERA ALEATORIO ASI LA VERDADERA SUERTE DECIDIRA EL GANADOR , ESPERO LAS SUERRTE LOS ACOMPAÑE")

    function mezclar(arr){
    for (var i = arr.length - 1; i > 0; i--){
        var k = Math.floor(Math.random() * (i + 1));
        var tmp = arr[i]; arr[i] = arr[k]; arr[k] = tmp;
    }
    }

    var indices = [];
    for (var z = 0; z < jugadores; z++) { indices.push(z); }

    while( Puntajefinal==false )
    {

    var orden = indices.slice();
    mezclar(orden);

    for(p=0; p<jugadores; p++)
    {
            var i = orden[p]; 

            var Dado=Math.floor(Math.random()*6)+1
            alert("Suerte al tirar tu dado " +listajugadores[i]+ "\n¡QUE TENGAS SUERTE!")
            var puntajes=puntaje[i]+Dado
            puntaje[i]=puntajes
            alert("" +listajugadores[i] + "\n Sacaste en tu dado: "+Dado+ "\nTienes un puntaje: "+puntaje[i]+ "z")
            
            if(puntaje[i]>=limite)
            {
                Puntajefinal=true
                alert("Felicidades has ganado: "+listajugadores[i]+ " ¡ERES UN VERDADERO CRACK,GENIO,BESTIA,IMPARABLE,TRIUNFADOR,ELEGANTE,DERROCHADOR,LITERAL UN DIOS UN VERDADERO CRACK")
                break;
            }
    }
    }

}

function contacto(){
    var nombre      =   document.getElementById("nombre").value;
    var correo      =   document.getElementById("correo").value;
    var telefono    =   document.getElementById("telefono").value;
    var fechanac    =   document.getElementById("fechanac").value;
    var estu        =   document.getElementById("estu").value;
    var univer      =   document.getElementById("univer").value;
    var opcion1     =   document.getElementById("opcion1").checked ? 1 : 0;
    var opcion2     =   document.getElementById("opcion2").checked ? 1 : 0;
    var opcion3     =   document.getElementById("opcion3").checked ? 1 : 0;
    var opcion4     =   document.getElementById("opcion4").checked ? 1 : 0;
    var opcion5     =   document.getElementById("opcion5").checked ? 1 : 0;
    var opcion6     =   document.getElementById("opcion6").checked ? 1 : 0;
    var epocarap    =   document.getElementById("epocarap").value;
    var comentarios =   document.getElementById("comentarios").value;
    /*var adjunto     =   document.getElementById("adjunto").value;*/

    if(nombre==''|| correo==''||fechanac=='')
    {
        alert("Llena los datos correctamente")

    }
    else
    {
       const formData=new FormData();
            formData.append("nombre", nombre);
            formData.append("correo",correo);
            formData.append("telefono",telefono);
            formData.append("fechanac",fechanac);
            formData.append("estu",estu);
            formData.append("univer",univer);
            formData.append("opcion1",opcion1);
            formData.append("opcion2",opcion2);
            formData.append("opcion3",opcion3);
            formData.append("opcion4",opcion4);
            formData.append("opcion5",opcion5);
            formData.append("opcion6",opcion6);
            formData.append("epocarap",epocarap);
            formData.append("comentarios", comentarios);

            fetch('insertar.php',{
                method: 'POST',
                body: formData
            })
            .then(response=> response.text())
            .then(data=>{
                console.log('Respuesta del servidor:', data);
                alert('¡Datos enviados correctamente!');
            })
            .catch(error=>{
                console.error('Error al enviar los datos', error);
                alert('Hubo un error al enviar los datos')
            });
    }

    
}

