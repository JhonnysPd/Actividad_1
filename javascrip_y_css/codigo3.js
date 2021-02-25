
var numero = parseInt(prompt('Ingresa un número, introduzca "0" para finalizar la serie',''));
var salida= "";
var suma = 0;
var promedio= 0;
var contar = 0;

while (numero != 0){
    // document.write(numero + " Este no era el numero solicitado" + "<br>");
    salida += "<tr><td><center>"+ numero + "</center></td></tr>";
    contar ++;
    suma+= numero;
    numero = parseInt(prompt('Ingresa un número, introduzca "0" para finalizar la serie',''));
}

salida += "<tr><td>"+ "Total números ingresados: " + contar + </td></tr>";
salida += "<tr><td>"+"Suma de numeros ingresados: "+ suma + </td></tr>";
salida += "<tr><td>"+ "Promedio: " + suma/contar + </td></tr>";


document.getElementById("tabla3").innerHTML = salida;