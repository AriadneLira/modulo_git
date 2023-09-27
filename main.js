// Aplicar máscaras aos campos
$(document).ready(function () {
    $('#telefone').mask('(00) 0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
});

// Evento para enviar o formulário
$('#cadastro-form').submit(function (event) {
    event.preventDefault();
    // Aqui você pode adicionar código para processar os dados do formulário
    alert('Formulário enviado!'); // Exemplo de mensagem de alerta
});
