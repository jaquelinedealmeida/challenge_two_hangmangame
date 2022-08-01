// Seletores
let tela = document.querySelector("canvas");
let hagman = (document.getElementById("game").style.display = "none");
let btnNovoJogoDesaparecer = (document.getElementById(
  "btn-new-game"
).style.display = "none");
let btnSaveDesaparecer = (document.getElementById("btn-save").style.display =
  "none");
let btnCancelDesaparecer = (document.getElementById(
  "btn-cancel"
).style.display = "none");
let teclado = (document.getElementById("write_word").style.display = "none");
let btnSairDesaparecer = (document.getElementById(
  "btn-game-over"
).style.display = "none");
let adcionarPalavra = (document.getElementById("add_word").style.display =
  "none");
let btnNovoJogo = document.getElementById("btn-new-game");
let btnSair = document.getElementById("btn-game-over");
let btnSalvar = document.getElementById("btn-save");
let btnCancelar = document.getElementById("btn-cancel");

//pensar no tamanho das palavras de acordo com o canvas
//uso de letras maiusculas para usar no Canvas

let palavras = [
  "ARDUINO",
  "PYTHON",
  "JAVA",
  "PHP",
  "HTML",
  "LUA",
  "TYPESCRIPT",
  "COBOL",
];

let tabuleiro = document.getElementById("hangman").getContext("2d");
let palavraSecreta = "";
let letras = [];
let palavraCerta = "";
let erros = 8;
let letrasErradas = [];
let numeroTentativas = 8;
let letraEscolhida = [];


//eventos

// captura o id "iniciar jogo" no momento do click e direciona ao método que inicia o jogo

document.getElementById("begin-game").onclick = () => {
  iniciarJogo();
};

//captura o id e salva a palavra adcionada
document.getElementById("btn-save").onclick = () => {
  salvarPalavra();
};

// atualiza a tela quanndo o usuario clica em novo jogo
btnNovoJogo.addEventListener("click", function () {
  location.reload();
});

// atualiza a tela quando o usuário clica em desistir
btnSair.addEventListener("click", function () {
  location.reload();
});

// atualiza a tela quando o usuario clica em salvar e começar
btnSalvar.addEventListener("click", function () {
  location.reload();
});
//atualiza a tela quando o usuário clica em cancelar

btnCancelar.addEventListener("click", function () {
  location.reload();
});

// uso de Math.floor para inserir numeros inteiro arredondado para baixo e Math.random apra numeros aleatorios
//faz o sorteio da palavra
function escolherPalavraSecreta() {
  let palavra = palavras[Math.floor(Math.random() * palavras.length)];
  palavraSecreta = palavra;
 console.log(palavra);
  return palavra;
}

// teclas

// verifica qual letra foi clicada
function verificarLetraClicada(key) {
  if (letras.length < 1 || letras.indexOf(key) < 0) {
    //console.log(key);
    letras.push(key);
    return false;
  } 
  else {
    letras.push(key);
    return true;
  }
}

function adcionarLetraCorreta(i) {
  palavraCerta += palavraSecreta[i].toUpperCase();
}

function adcionarLetraIncorreta(letter) {
  if (palavraSecreta.indexOf(letter) <= 0) {
    erros -= 1;
    //letter é o parametro da funcao
  }
}


//acionar teclado virtual

function verificarLetraEscolhida(letra){
  document.getElementById("tecla-" + letra).disabled = true;
  if(numeroTentativas > 0)
  {
      mudarStyleLetra("tecla-" + letra);
      verificarLetraClicada(letra);
      adcionarLetraCorreta();
      adcionarLetraIncorreta();
    
  }    
}


function mudarStyleLetra(tecla) {
  document.getElementById(tecla).style.background = "#25768f;";
  document.getElementById(tecla).style.color = "#ffffff";
}

function verificarFimDoJogo(letra) {
  //checa se a letra já foi incluida no array de letras certas e erradas
  if (letraEscolhida.length < palavraSecreta.length) {
    //incluindo as letras  já digitadas no array
    letrasErradas.push(letra);

    //valida se o usuario cometeu o numero maximo
    if (letrasErradas.length > numeroTentativas) {
      exibirDerrota();
    } 
    
    else if (letraEscolhida.length < palavraSecreta.length) {
      adcionarLetraIncorreta(letra);
      escreverLetraIncorreta(letra, erros);
    }
  }
}

//verifica se o usuario ganhou
function verificarVencedor(letra) {
  letraEscolhida.push(letra.toUpperCase());
  
  if (letraEscolhida.length == palavraSecreta.length) {
  
    exibirVitoria()
  }

}


// botoes da tela home desaparecem e mostra tela adcionar
function mostrarTelaAdcionarPalavra() {
  document.getElementById("div-desapear").style.display = "none";

  //teclado apareça
  document.getElementById("write_word").style.display = "block";
  //
  document.getElementById("btn-cancel").style.display = "block";
  document.getElementById("btn-save").style.display = "block";

  document.getElementById("add_word").style.display = "block";
}

//salva a palavra que o usuário escreveu
function salvarPalavra() {
  
  //captura o que foi digitado

  let novaPalavra = document.getElementById("input-new-word").value;

  // inclui a palavra digitada no array de palavras a serem sorteadas

  if (novaPalavra !== "") {
    palavras.push(novaPalavra.toUpperCase());
    alert("Sua palavra foi salva.");

    //a tela de adcionar palavra desaparece
    document.getElementById("new_word").style.display = "none";
    iniciarJogo();
  } else {
    alert("Você esqueceu de digitar a sua palavra.");
  }
}

//jogo

//inicia jogo para
//
function iniciarJogo() {
  //faz com que os botoes da tela home desapareçam
  document.getElementById("div-desapear").style.display = "none";

  //chama a funcao que desenha o canvas
  desenharCanvas();

  //chama a funcao que sorteia a palavra
  escolherPalavraSecreta();

  //chama a funcao que desenha as linhas
  desenharLinhas();

  // impede que teclas como shift e outras sejam escritas
function verificarLetra(keyCode) {
  if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
}

  //faz om que os botoes de "new game e game over" apareça
  document.getElementById("btn-new-game").style.display = "block";
  document.getElementById("btn-game-over").style.display = "block";

  // faz com que o teclado aparece
  document.getElementById("write_word").style.display = "block";

  // faz com que canvas apareça
  document.getElementById("game").style.display = "block";


  //captura a letra digitada
  document.onkeydown = (e) => {
    //coloca a letra digitada em maiscula
    let letra = e.key.toUpperCase();
    //verifica se o usuario não perdeu
    if (letrasErradas.length <= numeroTentativas) {
      if (!verificarLetraClicada(e.key) && verificarLetra(e.keyCode)) {
        if (palavraSecreta.includes(letra)) {
          adcionarLetraCorreta(palavraSecreta.indexOf(letra));
          for (let i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] === letra) {
              escreverLetraCorreta(i)
              verificarVencedor(letra)
            }
          }
        }
        // se houve erros mais que o permitido chama as funcoes
        //que desenham a forca
        else {
          if (!verificarLetraClicada(e.key) && !verificarVencedor(letra)) 
          return;
          desenharForca(erros);
          verificarFimDoJogo(letra);
        }
      }
    } 
    else {
      alert("Você atingiu o limite de letras incorretas ");
    }
  };
}
