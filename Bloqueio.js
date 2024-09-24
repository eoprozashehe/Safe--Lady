function validateForm() {
    let isValid = true;
    
    // Limpar mensagens de erro
    document.getElementById('nameError').innerText = '';
    document.getElementById('gmailErro').innerText = '';
    document.getElementById('reviewError').innerText = '';

    // Obter valores dos campos
    const name = document.getElementById('nome').value.trim();
    const email = document.getElementById('gmail').value.trim();
    const review = document.getElementById('review').value.trim();

    // Validar campos
    if (name === '') {
        document.getElementById('nameError').innerText = 'O nome é obrigatório.';
        isValid = false;
    }
    if (email === '') {
        document.getElementById('emailError').innerText = 'O e-mail é obrigatório.';
        isValid = false;
    }
    if (review === '') {
        document.getElementById('reviewError').innerText = 'A avaliação é obrigatória.';
        isValid = false;

    }
    function register() {
        window.location.href = "register.html";
    }
     window.location.href = 'register.html'

    // Se todos os campos forem válidos, enviar o formulário
    if (isValid) {
        document.getElementById('evaluationForm').submit(); // Submete o formulário
        window.location.href = 'register.html'
        function register() {
            window.location.href = "register.html";
        }

    }
} 

