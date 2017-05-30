$(document).ready(function () {
    var $nome = $('#txtNome'); //document.getElementById()
    var nome = $nome.val();
    var frase = nome.concat(' esta aprendendo JQuery.');
    $('#frase').text(frase);
});