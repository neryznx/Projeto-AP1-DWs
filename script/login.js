function mostrarSenha() {
    var inputPass = document.getElementById('senha');
    var btnShowPass = document.getElementById('btn-senha');

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text'); 
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill'); 
    } else {
        inputPass.setAttribute('type', 'password'); 
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill'); 
    }
}
document.querySelector('button').addEventListener('click', function(event) {
    var email = document.getElementById('Email');
    var senha = document.getElementById('senha');
    
    if (email.value === "") {
        alert("Por favor, preencha o campo de Email.");
        email.focus();
        event.preventDefault(); 
        return;
    }

    if (senha.value === "") {
        alert("Por favor, preencha o campo de Senha.");
        senha.focus();
        event.preventDefault();
        return;
    }
});