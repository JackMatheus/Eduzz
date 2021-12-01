//Lógica da mundança de cores
let order = [];
let clickedOrder = [];
let score = 0;

//0-verde
//1-vermelho
//2-amarelo
//3-azul


const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Função condicional que retona a cor
let createColorElement = (color) => {
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }
}

//Cria ordem aleatória de cores//flor arredondar
//shuffoerder é uma função com ordem embaralhada de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

//Acende a próxima cor 
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    //  classList acess o (css) selected 
    element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  });
}
//Verifica se os botões clicados são mesmo da ordem gerada no jogo.
//Verificando se clickedOrder[i] != order[i]
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      //rodandpo nova função
      gameOver();
      break;
    }
  }
  //comparando se clickedOrder123 = order123, ou não!
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: $(score)\n Você acertou ! Iniciando próximo nível`);
    nextLevel();
  }
}

//função para o clik do usuário 
let click = (color) => {
  // nosso array  clickedOrder vai ser da cor que atribuirmos
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);
}


//Função para o próximo nivel do jogo
//Para isso tenho que almentar o score e gerar nova ordem
let nextLevel = () => {
  score++;
  shuffleOrder();
}

//Função para gameover
//Tem que add alert e reiniciar o game
let gameOver = () => {
  alert(`Pontuação: $(score)\n Você perdeu o jogo!\nClique em OK parareiniciar um novo jogo`);
  //Zerando
  order = [];
  clickedOrder = [];
  //Reiniciando o jogo
  //Vou cria a função playGame logo abaixo - aqui só chamei a função
  playGame();
}

let playGame = () => {
  alert('Bem vindo ao Genesis ! Iniciando um novo jogo')
  score = 0;

  nextLevel();
}

//adcionando as cores;
green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));

//evento de click de acordo com as cores
green.onClick = () => click(0);
red.onClick = () => click(1);
yellow.onClick = () => click(2);
blue.onClick = () => click(3);

//Carregando o jogo no momento que abrir a pagina
playGame();

