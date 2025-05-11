const perguntas = [
    {
      pergunta: "Quanto é 9 x 7?",
      opcoes: ["63", "72", "56", "49"],
      correta: 0
    },
    {
      pergunta: "Quem escreveu Dom Casmurro?",
      opcoes: ["Machado de Assis", "Carlos Drummond", "Clarice Lispector", "Graciliano Ramos"],
      correta: 0
    },
    {
      pergunta: "Qual elemento tem o símbolo Fe?",
      opcoes: ["Ferro", "Flúor", "Fósforo", "Francium"],
      correta: 0
    },
    {
      pergunta: "Qual linguagem é usada para estilizar páginas web?",
      opcoes: ["HTML", "CSS", "JavaScript", "Python"],
      correta: 1
    },
    {
      pergunta: "Quantos planetas tem no sistema solar?",
      opcoes: ["8", "9", "7", "10"],
      correta: 0
    }
  ];
  
  let indice = 0;
  let pontos = 0;
  
  function mostrarPergunta() {
    const atual = perguntas[indice];
    document.getElementById("pergunta").innerText = atual.pergunta;
  
    const opcoesDiv = document.getElementById("opcoes");
    opcoesDiv.innerHTML = "";
  
    atual.opcoes.forEach((opcao, i) => {
      opcoesDiv.innerHTML += `<label><input type="radio" name="resposta" value="${i}"> ${opcao}</label><br>`;
    });
  
    document.getElementById("feedback").innerText = "";
  }
  
  function verificarResposta() {
    const selecionada = document.querySelector('input[name="resposta"]:checked');
  
    if (!selecionada) {
      alert("Escolhe uma opção aí!");
      return;
    }
  
    const valor = parseInt(selecionada.value);
  
    if (valor === perguntas[indice].correta) {
      pontos++;
      document.getElementById("feedback").innerText = "Acertou!";
    } else {
      document.getElementById("feedback").innerText = "Errou!";
    }
  
    indice++;
  
    setTimeout(() => {
      if (indice < perguntas.length) {
        mostrarPergunta();
      } else {
        document.getElementById("quiz").style.display = "none";
        document.getElementById("pontuacao").innerText = "Você acertou " + pontos + " de " + perguntas.length;
      }
    }, 1000);
  }
  
  window.onload = mostrarPergunta;  
