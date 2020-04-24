function getRadioValor(){
    var rads = -1;

    if(document.getElementById("homem").checked == true)
        rads = 1;
    if(document.getElementById("mulher").checked == true)
        rads = 0;

    return(rads)
}

function calculo (){
    var estatura = document.getElementById('estatura').value;
    var peso = document.getElementById('peso').value;
    var idade = document.getElementById('idade').value;
    var sexo = getRadioValor();

    if (sexo < 0) {
        alert("Selecione o Sexo!");
    } else {

        var imc = peso / ( (estatura/100) * (estatura/100) );

        var categoria = "";

        if (imc < 18.5) 
            categoria = "Subnutrido";
        else if (imc >= 18.5 && imc < 25)
            categoria = "Normal";
        else if (imc >= 25 && imc < 30)
            categoria = "Sobrepeso";
        else if (imc >= 30 && imc < 35)
            categoria = "Obesidade I";
        else if (imc >= 35 && imc < 40)
            categoria = "Obesidade II";
        else
            categoria = "Obesidade III";

        document.getElementById('resultIMC').innerText = imc + " (" + categoria + ")";

        var tmb = 0;

        if(sexo == 1){
            tmb = ( ( 66.5 + ( (13.75 * peso) + (5.003 * estatura) ) ) - (6.755 * idade) );
            document.getElementById('resultTMB').innerText = tmb + " KCal";
        }
        else {
            tmb = ( ( 655.1 + ( (9.563 * peso) + (1.850 * estatura) ) ) - (4.676 * idade) );
            document.getElementById('resultTMB').innerText = tmb + " KCal";
        }
    }
}

var botao = document.getElementById('calcular');

botao.onclick = calculo;