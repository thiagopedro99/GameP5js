

let personagem
let grama
let bola

let andarX = 0
let andarY = 0

const tamanho = 64
const velocidade = 64
const div = document.getElementById(".iniciar")

function setup() {
    createCanvas(576, 512);

    personagem = loadImage('img/personagem.png')
    grama = loadImage('img/grass.png')
    boss = loadImage('img/Boss.png')
}


function draw() {
    background(220);

    if (andarX < 0) {
        andarX = 0
    }

    if (andarY < 0) {
        andarY = 0
    }

    if (andarX > 512) {
        andarX = 512
    }

    if (andarY > 448) {
        andarY = 448
    }

    for (let i = 0; i < 9; i++) {

        for (let j = 0; j < 9; j++) {
            image(grama, i * tamanho, j * tamanho, tamanho, tamanho)


        }
    }
    image(personagem, andarX, andarY, 64, 64)
    image(boss, 480, 408, 96, 96)
    textSize(15)
    // text(andarX, 200, 300);
    // text(andarY, 250, 300);

    if (andarX >= 448 && andarY >= 384) {
        rect(160, 160, 256, 256)

        text('Parabéns!!', 256, 192)
        text('Tanjiro derrotou Akaza', 210, 256)
        restart = createButton('Reiniciar')
        restart.position(256, 288)
        restart.mousePressed(reset)
        noLoop()

    }
}


function reset() {
    andarX = 0
    andarY = 0
    restart.remove()
    loop()
}


function keyPressed() {


    if (keyIsDown(UP_ARROW)) {
        andarY -= velocidade

    }

    if (keyIsDown(RIGHT_ARROW)) {

        andarX += velocidade

    }


    if (keyIsDown(DOWN_ARROW)) {

        andarY += velocidade

    }


    if (keyIsDown(LEFT_ARROW)) {
        andarX -= velocidade

    }
}
