function consultarStatus() {
    const cpf = document.getElementById('cpfInput').value;

    // Realiza uma requisição para o servidor com o CPF digitado
    fetch(`/consulta?cpf=${cpf}`)
        .then(response => response.json())
        .then(data => {
            let resultDiv = document.getElementById('result');
            if (data.status === "em dia") {
                resultDiv.innerHTML = `
                    <p class="status-info">Status: <span class="status-value" style="color: green;">${data.status}</span></p>
                    <p class="data-info">Data do pagamento: <span class="data-value">${data.data_pagamento}</span></p>
                    <p class="metodo-info">Método de pagamento: <span class="metodo-value">${data.metodo_pagamento}</span></p>`;
            } else if (data.status === "atrasado") {
                resultDiv.innerHTML = `
                    <p class="status-info">Status: <span class="status-value" style="color: red;">${data.status}</span></p>`;
            } else {
                resultDiv.innerHTML = `<p>${data.status}</p>`;
            }
        })
        .catch(error => {
            console.error("Erro ao consultar status:", error);
            document.getElementById('result').innerHTML = `<p>Erro ao consultar status. Por favor, tente novamente.</p>`;
        });
}
