
var num = parseInt(prompt("Digite un numero entre 1 y 20",""));
var salida='';

for(var i=1; i<=20; i++){
    salida+='<tr><td>'+i + '</td><td>'+ valorEsp(i) +'</td><td>'+ valorIng(i) +'</td></tr>';
}

document.getElementById("tabla2").innerHTML=salida;

function valorEsp(num){
    switch(num){
        case 1: valorEs="Uno"; break;
        case 2: valorEs="Dos"; break;
        case 3: valorEs="Tres"; break;
        case 4: valorEs="Cuatro"; break;
        case 5: valorEs="Cinco"; break;
        case 6: valorEs="Seis"; break;
        case 7: valorEs="Siete"; break;
        case 8: valorEs="Ocho"; break;
        case 9: valorEs="Nueve"; break;
        case 10: valorEs="Diez"; break;
        case 11: valorEs="Once"; break;
        case 12: valorEs="Doce"; break;
        case 13: valorEs="Trece"; break;
        case 14: valorEs="Catorce"; break;
        case 15: valorEs="Quince"; break;
        case 16: valorEs="Dieciséis"; break;
        case 17: valorEs="Diecisiete"; break;
        case 18: valorEs="Dieciocho"; break;
        case 19: valorEs="Diecinueve"; break;
        case 20: valorEs="Veinte"; break;
    }
    return valorEs;

}
function valorIng(num){
    switch(num){
        case 1: valorIn="One"; break;
        case 2: valorIn="Two"; break;
        case 3: valorIn="Three"; break;
        case 4: valorIn="Four"; break;
        case 5: valorIn="Five"; break;
        case 6: valorIn="Six"; break;
        case 7: valorIn="Seven"; break;
        case 8: valorIn="Eigth"; break;
        case 9: valorIn="Nine"; break;
        case 10: valorIn="Teen"; break;
        case 11: valorIn="Eleven"; break;
        case 12: valorIn="Twelve"; break;
        case 13: valorIn="Thirteen"; break;
        case 14: valorIn="Fourteen"; break;
        case 15: valorIn="Fifteen"; break;
        case 16: valorIn="Sixteen"; break;
        case 17: valorIn="Seventeen"; break;
        case 18: valorIn="Eighteen"; break;
        case 19: valorIn="Nineteen"; break;
        case 20: valorIn="Twenty"; break;
    }
    return valorIn;
}

