// Seletores e variáveis no inicio do código

//pensar no tamanho das palavras de acordo com o canvas
let palavras = ['ALURA', 'ORACLE', 'HTML', 'CSS', 'HTML','JAVASCRIPT','TECNOLOGIA']
//uso de letras maiusculas para usar no Canvas
let tabuleiro = document.getElementById('hangman').getContext('2d')
let letras = [];
let palavraCorreta = ""
let erros = 9;
// uso do array com letras maiusculo
//getContext -

// uso de Math.floor para inserir numeros inteiro arredondado para baixo e Math.random apra numeros aleatorios
//escolher palavras aleatórias
function escolherPalavraSecreta() {
    var palavra = palavras[Math.floor(Math.random()*palavras.length)]
    palavraSecreta = palavra
    //console.log(palavra)
    return palavra    
}

//desenhar traços com Canvas
function escreverTracos() {
    tabuleiro.LineWidth = 6
    //espessura da linha
    tabuleiro.LineCap = "round"
    //ajustas os cantos
    tabuleiro.LineJoin = "round"
    tabuleiro.strokeStyle = "#116CA4";
    tabuleiro.beginPath();
    let eixo = 600/palavraSecreta.length
    for(let i = 0; i < palavraSecreta.length; i++) {
        tabuleiro.moveTo(550+(eixo*i),640)
        tabuleiro.lineTo(500+(eixo*i),640)
    }
    tabuleiro.stroke()
    tabuleiro.closePath()
}

escreverTracos(escolherPalavraSecreta())

function escreverLetraCorreta(index) {
    tabuleiro.font = 'bold 52px Inter';
    tabuleiro.lineWidth = 6;
    tabuleiro.lineJoin = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.strokeStyle = "#0A3871";

    let eixo = 600/palavraSecreta.length
    tabuleiro.fillText(palavraSecreta[index],505+(eixo *index),620)
}

function escreverLetraIncorreta(letra, errorLeft){
    tabuleiro.font = 'bold 40px Inter';
    tabuleiro.lineWidth = 6;
    tabuleiro.lineJoin = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.strokeStyle = "#0A3871";
    tabuleiro.fillText(letra, 535+(10-errorLeft),710,40)

}

function verificarLetraCorreta(key){
    if(letras.length < 1 || letras.indexOf(key) < 0) {
        console.log(key)
        letras.push(key)
        return false
    }

    else {
        letras.push(key.toUpperCase())
        return true 
    }
}

function adcionarLetraCorreta(i) {
    palavraCorreta += palavraSecreta[i].toUpperCase()
}

function adcionarLetraIncorreta(letter){
    if(palavraSecreta.indexOf(letter) <= 0) {
        erros -=1
    }

}

document.onkeydown = (e) => {
    let letra = e.key.toUpperCase()
    if(!verificarLetraCorreta(e.key)) {
        if(palavraSecreta.includes(letra)) {
            adcionarLetraCorreta(palavraSecreta.indexOf(letra))
            for(let i = 0; i < palavraSecreta.length; i++) {
                if(palavraSecreta[i] === letra) {
                    escreverLetraCorreta(i)
                }
                
            }
        }

        else{
            if(verificarLetraCorreta(e.key))
            return
            adicionarLetraIncorreta(letra)
            escreverLetraCorreta(letra,erros)

    }

    }
}