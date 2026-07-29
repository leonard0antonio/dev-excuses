// Banco de dados em memória das nossas desculpas
const excuses = {
    bug: [
        "Foi um raio cósmico que alterou um bit no servidor.",
        "Na minha máquina funciona perfeitamente.",
        "Isso não é um bug, é uma feature surpresa não documentada.",
        "A culpa é do fuso horário do servidor.",
        "O problema é na camada 8 do modelo OSI (o usuário)."
    ],
    prazo: [
        "O git rebase apagou meu código e minha alma.",
        "Fiquei preso no Vim e levei 3 horas para descobrir como sair.",
        "Meu cachorro comeu meu token de acesso da AWS.",
        "O 'npm install' ainda está rodando desde ontem."
    ],
    reuniao: [
        "Minha internet caiu justo na hora da daily.",
        "Acho que meu microfone está com mau contato.",
        "Desculpe, eu estava falando mutado esse tempo todo."
    ],
    infra: [
        "A AWS caiu, não podemos fazer nada.",
        "Faltou memória no container do Docker.",
        "O banco de dados entrou em deadlock por causa da lua cheia."
    ],
    default: [
        "Deve ser problema de cache. Limpa aí (Ctrl+F5) e tenta de novo.",
        "A API de terceiros mudou a estrutura do JSON sem avisar.",
        "A culpa é do estagiário.",
        "É apenas um comportamento esperado do sistema."
    ]
};

/**
 * Retorna uma desculpa aleatória baseada na categoria
 */
function getRandomExcuse(type = 'default') {
    const list = excuses[type] || excuses.default;
    const index = Math.floor(Math.random() * list.length);
    return list[index];
}

/**
 * Retorna todas as desculpas de uma categoria ou o objeto inteiro
 */
function getAllExcuses(type) {
    if (type && excuses[type]) {
        return excuses[type];
    }
    return excuses; // Retorna tudo se não passar categoria
}

/**
 * Permite adicionar uma nova desculpa customizada em tempo de execução
 */
function addExcuse(type, newExcuse) {
    if (!excuses[type]) {
        excuses[type] = []; // Cria a categoria se ela não existir
    }
    excuses[type].push(newExcuse);
    return `✅ Sucesso! Desculpa adicionada na categoria '${type}'.`;
}

/**
 * Função premium para tirar o seu da reta e culpar um colega
 */
function blameSomeoneElse(colleagueName) {
    const blameList = [
        `Foi o código que o(a) ${colleagueName} mergeou na sexta-feira às 18h.`,
        `Acho que o(a) ${colleagueName} deletou a tabela de produção sem querer.`,
        `O(a) ${colleagueName} não aprovou meu Pull Request a tempo.`,
        `O ambiente local do(a) ${colleagueName} deve ter corrompido o repositório.`
    ];
    const index = Math.floor(Math.random() * blameList.length);
    return blameList[index];
}

// Exportando todas as funcionalidades
module.exports = { 
    getRandomExcuse, 
    getAllExcuses, 
    addExcuse, 
    blameSomeoneElse 
};