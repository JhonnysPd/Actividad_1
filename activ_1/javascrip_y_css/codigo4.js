

var esp= true;
var nombre= prompt('Ingrese su nombre ','');
var apellido= prompt('Ingrese sus Apellidos ','');
var notUno= parseInt( prompt('Ingrese la nota 1',''));
var notDos= parseInt( prompt('Ingrese la nota 2',''));
var notTres= parseInt( prompt('Ingresa la nota 3',''));
var notFinal= 0;
var salida= "";

while (nombre != " ") {
    notFinal= notUno+notDos+notTres;
    notFinal = notFinal/3;
    
    salida+= "<tr><td>"+nombre+"</td><td>"+apellido+"</td><td>"+notUno+"</td><td>"+notDos+"</td><td>"+notTres+"</td><td>"+notFinal+"</td></tr>";
    
    nombre= prompt('Ingrese su nombre ','');
    apellido= prompt('Ingrese sus Apellidos ','');
    notUno= parseInt( prompt('Ingrese la nota 1',''));
    notDos= parseInt( prompt('Ingrese la nota 2',''));
    notTres= parseInt( prompt('Ingresa la nota 3',''));

}


document.getElementById('tabla').innerHTML = salida;