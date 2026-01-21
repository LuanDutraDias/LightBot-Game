// FAZER CADA QUADRADO OCUPAR UMA LINHA E UMA COLUNA DEFINIDAS PARA ALTERAR A POSIÇÃO DO JOGADOR
const squares = document.querySelectorAll('.square');

let squarePosition = 0;
let matrix = [];
for (let i = 0; i < 5; i++) {
  matrix[i] = [];
  for (let j = 0; j < 5; j++) {
    matrix[i][j] = squares[squarePosition];
    squarePosition++;
  }
}

//

let commands = [];
let forward = '<i class= \'bi bi-arrow-up\'></i>';
let right = '<i class= \'bi bi-arrow-90deg-right\'></i>';
let left = '<i class= \'bi bi-arrow-90deg-left\'></i>';
let reset = '<i class= \'bi bi-eraser\'></i>';
let undo = '<i class= \'bi bi-backspace\'></i>';
let light = '<i class= \'bi bi-lightbulb-fill\'></i>';
let counter = 0;
let displayMain = document.querySelector('#displayMain');

function addCommands(command){
    if (command == undo && counter == 0){
        return;
    } 
    else if (command == undo){ 
        commands.pop();
        displayMain.innerHTML = commands.join(''); 
        counter--;
    } else if (command == reset){
        commands = [];
        counter = 0;
        displayMain.innerHTML = commands.join(''); // .join('') adiciona o que estiver no parênteses entre os elementos do vetor, então ele ATUALIZA O VETOR!!!
    } 
    else { 
        commands.push(command); 
        displayMain.innerHTML += commands[counter]; 
        counter++;
    }
    console.log(commands); 
}    