
// Punto 1

var salida="";
var numero1= parseInt(prompt("Ingresa un número",""));
var suma= 0;
var numPar= 0;
var numImp= 0;
var multCin= 0;


for (var i=1; i<=numero1; i++) {
    salida+='<tr><td>'+i+'</td></tr>';
    suma+=i;

    if(i%2 == 0){
        numPar ++;
    } else {
        numImp ++;
    }

    if(i%5 == 0){
        multCin ++;
    }
}
salida+='<tr><td>'+'Suma Total '+suma+'</td></tr>';
salida+='<tr><td>'+'Num. Pares '+numPar+'</td></tr>';
salida+='<tr><td>'+'Num. impares '+numImp+'</td></tr>';
salida+='<tr><td>'+'Mult. cinco '+multCin+'</td></tr>';
document.getElementById('tabla1').innerHTML=salida;










