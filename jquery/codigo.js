$(document).ready(function(){ //ready indica que sera executado apos o carregamento do html
    var $titulo = $("#titulo") // o mesmo q document.getElementById
    $titulo.text("Brayan Santos");

    var $nome = $("#nome");
    console.log($nome);
    $nome.val("Brayan Santos")


    var $conteudo = $("#conteudo");
    var $titulo2 = $("<h2>", {text:"Brayan Santos"});
    $conteudo.append($titulo2); //append e html:limpa a dive antes apresntar a menssagem
})
 