
var numero = parseInt(prompt("Ingresa un número",""));
var salida= "";
var suma = 0;
var promedio= 0;
var contar = 0;

var cont = [];

while (numero != 0){
    // document.write(numero + " Este no era el numero solicitado" + "<br>");
    salida += "<tr><td><center>"+ numero + "</center></td></tr>";
    suma+= numero;
    numero = parseInt(prompt("Ingresa un número",""));
    cont = numero;
}
contar = cont.length; 
salida += "<tr><td><center>"+ "Total números ingresados: " + contar + "</center></td></tr>";
salida += "<tr><td><center>"+"Suma de numeros ingresados: "+ suma + "</center></td></tr>";
salida += "<tr><td><center>"+ "Promedio: " + suma/contar + "</center></td></tr>";



document.getElementById("tabla3").innerHTML = salida;