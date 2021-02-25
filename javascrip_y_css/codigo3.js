
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

salida += "<tr><td><center>"+ "Total números ingresados: " + contar + "</center></td></tr>";
salida += "<tr><td><center>"+"Suma de numeros ingresados: "+ suma + "</center></td></tr>";
salida += "<tr><td><center>"+ "Promedio: " + suma/contar + "</center></td></tr>";


document.getElementById("tabla3").innerHTML = salida;