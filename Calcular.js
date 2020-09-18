var buttonCalcular = document.getElementById('buttonCalcular');
var buttonLimpar = document.getElementById('buttonLimpar');
var idade = document.getElementById('idade');
var inputDate = document.getElementById('date');
buttonCalcular.onclick = calculo;
buttonLimpar.addEventListener('click', limpar);

var anoAtual = new Date().getFullYear();

function calculo() {
    var date = inputDate.value ;
    var x = anoAtual - date;
    if(x <= 0 || x > 120){
        idade.innerText = "Não existe ninguem vivo com essa idade";
    }else{
        idade.innerText = "Idade: " + x + " anos";
    }
}

function limpar() {
    inputDate.value = "";
    idade.innerText = "";
    
};