let InserirAluno = function(){
    
    
    let NomeInput = document.getElementById("nome")
    NomeInput2 = NomeInput.value;

    let NotaInput = document.getElementById("nota")
    Notainput2 = NotaInput.value;

    
    if((NomeInput2 === "") || (Notainput2 ==="")){
        alert("Insira as informações do(s) aluno(s)")
    }

    else{
        var tabela = document.getElementById("tabela")
   
        var novaLinha = tabela.insertRow();

        var novaCelulaNome = novaLinha.insertCell(0);
        var novaCelulaNota = novaLinha.insertCell(1);

        novaCelulaNome.innerHTML = NomeInput2; 
        novaCelulaNota.innerHTML = Notainput2;

        document.getElementById("nome").value = "";
        document.getElementById("nota").value = "";
    }
    

}

