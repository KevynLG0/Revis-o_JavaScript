let logar = function(){
    let email = 'kevyn.gabriel@gmail.com';
    let senha = 'kevyn123';
    
    let email_input = document.getElementById('email_usuario');
    let senha_usuario = document.getElementById('senha');
    email_input2 = email_input.value;
    senha_usuario2 = senha_usuario.value;

    if ((email_input2 === email) && (senha_usuario2 === senha)){

        let form = document.getElementById('forms');
        form.action = "index2.html";
    }
    else{
        alert('Email ou senha inválidos')
    }
}