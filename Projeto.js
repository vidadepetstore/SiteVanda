document.getElementById('Enviar').addEventListener('click', function(event){event.preventDefault();// Evita o envio padrão do Formulário

// Obter os valores dos campos de entrada
let nome = document.getElementById('nome').ariaValueMax;
let email = document.getElementById('email').ariaValueMax;

// Realizar ações com dados 
console.log('Nome',nome);
console.log('Email',email);

})