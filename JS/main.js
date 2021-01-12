/*var nome = " Victoria";
var idade = prompt("Qual a sua idade?");
var idade2 = 2;
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2); //soma os inteiros
var frase = "Comida japonesa é top"
console.log(frase);
console.log(frase.replace("japonesa", "brasileira"));
console.log(frase.toUpperCase());
// pra comentar usa barra barra
/* assim pode comentar varias linhas de uma vez*/
/*
var dicionario = {nome:"uva",cor:"roxa"};  
var dicionario2 = [{nome:"uva",cor:"roxa"},{nome:"maca",cor:"vermelha"}]; //lista de dicionarios

if(idade >= 18){
    alert("Entrada autorizada");
}
else{
    alert("Volte quando completar 18 anos");
} */

function clicou(){
 //   alert("Redirecionando para outra pagina... aguarde");
 document.getElementById("agradecimento").innerHTML ="<b>Obrigada por clicar</b>";
}

function redirecionar(){
   window.open("https://sig.ufla.br");
 // window.location.href = "https://sig.ufla.br";
}

function trocar(elemento){
//document.getElementById("mouse").innerHTML = "TROCOU DE TEXTO"; //dessa forma vc consegue alterar só aquele ID

elemento.innerHTML = "TROCOU O TEXTO"; //assim vc pode alterar quantos elementos quiser do tipo ID ou CLASS
    
}
function voltar(elemento){
    //document.getElementById("mouse").innerHTML = "Passe o mouse aqui";  //dessa forma vc consegue alterar só aquele ID
   elemento.innerHTML= "Passe o mouse aqui";

}

function mudar(elemento){
    var num = elemento.value;
    switch (num){
        case "1":
            alert("Voce vai morar no MT");
            console.log(num);
            break;
        case "2":
            alert("Voce vai morar em MG");
            console.log(num);
            break;
        case "3":
            alert("Voce vai morar em SP");
            console.log(num);
            break;
    }
}