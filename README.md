# 📌 Dev Excuses Library 🤷‍♂️ v2.0

<!-- Badges -->
![GitHub repo size](https://img.shields.io/github/repo-size/leonard0antonio/dev-excuses?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/leonard0antonio/dev-excuses?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/leonard0antonio/dev-excuses?style=for-the-badge)
![GitHub open issues](https://img.shields.io/github/issues/leonard0antonio/dev-excuses?style=for-the-badge)
![GitHub open pull requests](https://img.shields.io/github/issues-pr/leonard0antonio/dev-excuses?style=for-the-badge)

![Demo da aplicação](demo.jpeg)

> Uma biblioteca Node.js completa para salvar desenvolvedores em apuros gerando desculpas corporativas e técnicas altamente críveis. O objetivo principal é fornecer uma saída bem-humorada e instantânea para bugs em produção, atrasos de prazos ou infraestrutura instável.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Você instalou a versão mais recente de `Node.js`
* Você tem uma máquina `Windows / Linux / Mac`. (Sem restrições de Sistema Operacional)
* Você não precisa de `Banco de dados` ou `API Keys` (tudo roda localmente na memória).

## 🚀 Instalando o Dev Excuses Library

Para instalar e configurar o ambiente de desenvolvimento local, siga estas etapas:

**Linux, macOS e Windows:**
```bash
# Clone este repositório
git clone [https://github.com/leonard0antonio/dev-excuses.git](https://github.com/leonard0antonio/dev-excuses.git)

# Entre na pasta do projeto
cd dev-excuses

```

*(Nota: Como é uma biblioteca baseada apenas em código nativo JS, não é necessário rodar `npm install`, a menos que você queira inicializar um projeto do zero e transformá-la em pacote npm).*

## ☕ Usando o Dev Excuses

Para utilizar a biblioteca em seu projeto, basta importar o arquivo `index.js` e chamar as funções. Veja os exemplos abaixo:

```javascript
// Importando as funções da biblioteca
const devExcuses = require('./index.js');
// ou desestruturando: const { getRandomExcuse, blameSomeoneElse, addExcuse, getAllExcuses } = require('./index.js');

// 1. Gerar Desculpa Aleatória (Categorias: 'bug', 'prazo', 'reuniao', 'infra', 'default')
console.log(devExcuses.getRandomExcuse('infra')); 
// Saída ex: "A AWS caiu, não podemos fazer nada."

// 2. Culpar um Colega (Novo! 🚨 - Use por sua própria conta e risco)
console.log(devExcuses.blameSomeoneElse('Pedrinho'));
// Saída ex: "Foi o código que o(a) Pedrinho mergeou na sexta-feira às 18h."

// 3. Adicionar Nova Desculpa em tempo de execução
devExcuses.addExcuse('bug', 'Esqueci de colocar ponto e vírgula no final da linha.');

// 4. Listar Todas as desculpas de uma categoria
console.log(devExcuses.getAllExcuses('reuniao'));
// Retorna um Array com todas as desculpas de reunião

```

> **Nota:** Se você for consumir esta biblioteca em outro repositório utilizando **Git Submodules** (conforme exigido na Aula 9), basta rodar `git submodule add https://github.com/leonard0antonio/dev-excuses.git dev-excuses` no seu novo projeto.


## 📝 Licença

Esse projeto está sob a licença `MIT`. Veja o arquivo [LICENSE](https://www.google.com/search?q=LICENSE) para mais detalhes.
