const perguntas = [
    {
        pergunta: "Qual o resultado da conta matemática: 9 x 7?",
        opcoes: ["63", "72", "56", "49"],
        correta: 0
    },
    {
        pergunta: "Qual o resultado da conta matemática: 9 x 7?",
        opcoes: ["63", "72", "56", "49"],
        correta: 0
    },
    {
        pergunta: "Qual o resultado da conta matemática: 9 x 7?",
        opcoes: ["63", "72", "56", "49"],
        correta: 0
    },
    {
        pergunta: "Qual o resultado da conta matemática: 9 x 7?",
        opcoes: ["63", "72", "56", "49"],
        correta: 0
    },
    {
        pergunta: "Qual o resultado da conta matemática: 9 x 7?",
        opcoes: ["63", "72", "56", "49"],
        correta: 0
    },
]

let indice = 0
let pontos = 0

function mostrarPergunta() {
    const atual = perguntas[indice];

document.getElementById("pergunta").innerText = atual.pergunta;

    const opcoesDiv = document.getElementById("opcoes");
    opcoesDiv.innerHTML = "";

    atual.opcoes.forEach((opcao, i) => {
        opcoesDiv.innerHTML += `<label><inputype="radio" name="resposta" value="${i}"> ${opcao}</label><br>`;
    });

document.getElementById("feedback").innerText = "";
}

function ValidarResposta() {
    const selecionada = document.querySelector('input[name="resposta"]:checked');

    if(!selecionada) {
        alert("É preciso escolher uma opção!");
        return;
    }

    const valor = parseInt(selecionada.value);

    if (valor === perguntas[indice].correta) {
        pontos++;

    document.getElementById("feedback").innerText = "Acertou!";
    } else {
    document.getElementById("feedback").innerText = "Errou!";
    }
}