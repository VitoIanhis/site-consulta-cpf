# 📝 Consulta de Status por CPF

Este projeto é um site simples que permite ao usuário consultar o status de um CPF, gerando aleatoriamente a data do pagamento e o método de pagamento, caso o status esteja "em dia".
Basicamente eu só fiz esse site para usar no meu projeto [Consultor de pagamentos](https://github.com/VitoIanhis/consultor-de-pagamentos) 

## **✨ Funcionalidades**
- **🔍 Consulta de Status por CPF:** O usuário insere um CPF e o site retorna o status ("em dia" ou "atrasado").
- **🎲 Geração Aleatória de Dados:** Se o status for "em dia", o site gera aleatoriamente uma data de pagamento nos últimos 30 dias e um método de pagamento (cartão, boleto, ou pix).

## **💻 Tecnologias Utilizadas**
- **🌐 HTML:** Estrutura básica do site.
- **🎨 CSS:** Estilização do site.
- **⚙️ JavaScript:** Manipulação do DOM e requisições assíncronas.
- **🚀 Node.js e Express:** Servidor backend para gerar e retornar os dados.

## **🚀 Como Executar o Projeto**
### **📋 Pré-requisitos**
- Node.js instalado na máquina.

### **🔧 Passos para rodar o projeto**
1. Clone o repositório:
    ```bash
    git clone https://github.com/VitoIanhis/site-consulta-cpf
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd site-consulta-cpf
    ```
3. Instale as dependências (caso sejam adicionadas no futuro):
    ```bash
    npm install
    ```
4. Inicie o servidor:
    ```bash
    node server.js
    ```
5. Abra o navegador e acesse:
    ```
    http://localhost:3000
    ```
### **📸 Tela do site em Execução**
<h1 align="center"> <img src="https://ik.imagekit.io/tntifmcqk/Screenshot_4.png?updatedAt=1724548683766" alt="Tela de execução do script"/> </h1>
