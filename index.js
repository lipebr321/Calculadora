function Calc() {
    var inputNumero1 = document.getElementById('numero1');
    var inputOperador = document.getElementById('operador');
    var inputNumero2 = document.getElementById('numero2');


    var numero1 = parseInt(inputNumero1.value);
    var numero2 = parseInt(inputNumero2.value);

    var operador = inputOperador.value;

    if (operador == "+") {
        alert(numero1 + numero2);
    } else if (operador == "-") {
        alert(numero1 - numero2);
    }
    else if (operador == '*') {
        alert(numero1 * numero2);
    }
    else if (operador == '/') {
        alert(numero1 / numero2);
    }
    else {
        alert("Operador invalido");
    }

}