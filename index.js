// Biblioteca de desculpas corporativas e de TI
const excuses = {
    bug: [
        "Foi um raio cósmico que alterou um bit no servidor.",
        "Na minha máquina funciona perfeitamente.",
        "Isso não é um bug, é uma feature surpresa não documentada.",
        "A culpa é do fuso horário do servidor."
    ],
    prazo: [
        "O git rebase apagou meu código e minha alma.",
        "Fiquei preso no Vim e levei 3 horas para descobrir como sair.",
        "Meu cachorro comeu meu token de acesso da AWS."
    ],
    default: [
        "Deve ser problema de cache. Limpa aí e tenta de novo.",
        "A API de terceiros mudou a estrutura do JSON sem avisar.",
        "A culpa é do estagiário."
    ]
};

function getRandomExcuse(type = 'default') {
    const list = excuses[type] || excuses.default;
    const index = Math.floor(Math.random() * list.length);
    return list[index];
}

module.exports = { getRandomExcuse };