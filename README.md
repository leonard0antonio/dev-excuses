# Dev Excuses Library 🤷‍♂️ 2.0

Uma biblioteca Node.js completa para salvar desenvolvedores em apuros gerando desculpas corporativas e técnicas altamente críveis.

## Funcionalidades e Categorias
Categorias suportadas: `bug`, `prazo`, `reuniao`, `infra`, e `default`.

## Como usar

Primeiro, importe as funções da biblioteca:
\`\`\`javascript
const devExcuses = require('./index.js');
// ou desestruturando: const { getRandomExcuse, blameSomeoneElse, addExcuse, getAllExcuses } = require('./index.js');
\`\`\`

### 1. Gerar Desculpa Aleatória
\`\`\`javascript
console.log(devExcuses.getRandomExcuse('infra')); 
// Saída ex: "A AWS caiu, não podemos fazer nada."
\`\`\`

### 2. Culpar um Colega (Novo! 🚨)
Use esta função por sua própria conta e risco.
\`\`\`javascript
console.log(devExcuses.blameSomeoneElse('Pedrinho'));
// Saída ex: "Foi o código que o(a) Pedrinho mergeou na sexta-feira às 18h."
\`\`\`

### 3. Adicionar Nova Desculpa
Você pode injetar suas próprias desculpas durante a execução do programa.
\`\`\`javascript
devExcuses.addExcuse('bug', 'Esqueci de colocar ponto e vírgula no final da linha.');
\`\`\`

### 4. Listar Tudo
\`\`\`javascript
console.log(devExcuses.getAllExcuses('reuniao'));
// Retorna um Array com todas as desculpas de reunião
\`\`\`