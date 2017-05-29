//submit

var submit = document.forms[0];
submit.addEventListener('submit',function busca(event){
    event.preventDefault();
    buscar();    
})


function buscar() {
    var cadastro=["brayan", "bruno", "lucas"];
    var txt = window.document.getElementById("busca");
    console.log(txt.value);
    for(x=0; x < cadastro.length; x++){
        if(cadastro[1]==txt.value){
            alert(true);
        }
    }
}