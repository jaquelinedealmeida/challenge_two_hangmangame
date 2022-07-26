//desenhar canvas

function desenharCanvas() {
    tabuleiro.lineWidth= 15;
    tabuleiro.lineCap="round";
    tabuleiro.lineJoin="round";
    tabuleiro.fillStyle ="transparent";
    tabuleiro.strokeStyle ="transparent";
    tabuleiro.fillRect(0,0,1200,800);
    tabuleiro.beginPath();
    tabuleiro.moveTo(650,500);
    tabuleiro.lineTo(900,500);
    tabuleiro.stroke();
    tabuleiro.closePath();
    
}

function desenharLinhas() {
    tabuleiro.lineWidth= 8
    tabuleiro.lineCap="round"
    tabuleiro.lineJoin="round"
    tabuleiro.strokeStyle ="0A3871"
    tabuleiro.beginPath()
    let largura=600/palavraSecreta.length
    for (let i = 0; i < palavraSecreta.length;i++) {
        tabuleiro.moveTo(500+(largura * i), 640)
        tabuleiro.lineTo(550+(largura*i),640)
    }

    tabuleiro.stroke()
    tabuleiro.closePath()
}

desenharLinhas(escolherPalavraSecreta())

function escreverLetraCorreta(index) {
    tabuleiro.font = 'bold 100px Inter';
    tabuleiro.lineWidth = 6;
    tabuleiro.lineJoin = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.strokeStyle = "#fafafa";

    let largura = 600/palavraSecreta.length
    tabuleiro.fillText(palavraSecreta[index],505+(largura*index),620)
    tabuleiro.stroke()
}

function escreverLetraIncorreta(letra, errorsLeft){
    tabuleiro.font = 'bold 60px Inter';
    tabuleiro.lineWidth = 6;
    tabuleiro.lineJoin = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.strokeStyle = "#fafafa";
    tabuleiro.fillText(letra, 535+(40*10-errorsLeft),710,40)

}


function desenharForca(pontos) {
    tabuleiro.linewidth = 100;
    tabuleiro.lineCap ="round"
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle ="#FAFAFA"

    //base inferior 
    tabuleiro.moveTo(440, 500);
    tabuleiro.lineTo(800, 500);

    if(pontos === 8) {
        //poste lateral
        tabuleiro.moveTo(700,500)
        tabuleiro.lineTo(700,100)
    }
    //teto
    if(pontos === 7) {
        tabuleiro.moveTo(850,100)
        tabuleiro.lineTo(700,100)
    }
    //corda
    if(pontos === 6) {
        tabuleiro.moveTo(850,100)
        tabuleiro.lineTo(850,171)
    }
    // rosto
    if(pontos === 5 ){
        tabuleiro.moveTo(900,230)
        tabuleiro.arc(850,230,50,0,Math.PI*2)
    }
    //corpo
    if(pontos === 4) {
        tabuleiro.moveTo(850,389)
        tabuleiro.lineTo(850,289)
    }
    //perna esquerca
    if(pontos === 3) {
        tabuleiro.moveTo(850,389)
        tabuleiro.lineTo(800,450)
    }
    //perna direita
    if(pontos === 2) {
        tabuleiro.moveTo(850,389)
        tabuleiro.lineTo(890,450)
    }
    //mão esquerda 
    if(pontos === 1) {
        tabuleiro.moveTo(850,330)
        tabuleiro.lineTo(800,389)
    }
    //mão direita 
    if(pontos === 0) {
        tabuleiro.moveTo(850,330)
        tabuleiro.lineTo(890,389)
    }
    tabuleiro.stroke()
    tabuleiro.closePath()

}

function exibirDerrota() {
    tabuleiro.font = 'bold 80px Inter';
    tabuleiro.lineWidth = 10;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin="round";
    tabuleiro.fillStyle = "orange";
    tabuleiro.fillText("Opa!Fim do Jogo!",930,320)
}

function exibirVitoria() {
    tabuleiro.font ='bold 80px Inter';
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap ="round";
    tabuleiro.lineJoin ="round";
    tabuleiro.fillStyle="white";
    tabuleiro.fillText("Oba! Você ganhou! ", 930, 320)
    setTimeout(recarregar, 500)
}

function recarregar() {
    location.reload();
}



