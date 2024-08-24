const express = require('express');
const app = express();
const path = require('path');

// Serve arquivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));

// Função para gerar uma data aleatória nos últimos 30 dias
function gerarDataAleatoria() {
    const hoje = new Date();
    const diasAtras = Math.floor(Math.random() * 30);
    const dataAleatoria = new Date(hoje.setDate(hoje.getDate() - diasAtras));
    return dataAleatoria.toISOString().split('T')[0];
}

// Função para selecionar um método de pagamento aleatório
function gerarMetodoPagamentoAleatorio() {
    const metodos = ['cartão', 'boleto', 'pix'];
    return metodos[Math.floor(Math.random() * metodos.length)];
}

// Função para determinar aleatoriamente se o status é "em dia" ou "atrasado"
function gerarStatusAleatorio() {
    const statusPossiveis = ['em dia', 'atrasado'];
    return statusPossiveis[Math.floor(Math.random() * statusPossiveis.length)];
}

// Rota para consulta
app.get('/consulta', (req, res) => {
    const cpf = req.query.cpf;

    // Gera o status aleatório
    const status = gerarStatusAleatorio();

    // Gera a resposta com base no status
    let resultado = {
        status: status
    };

    if (status === 'em dia') {
        resultado.data_pagamento = gerarDataAleatoria();
        resultado.metodo_pagamento = gerarMetodoPagamentoAleatorio();
    }

    res.json(resultado);
});

// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
