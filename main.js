
const screenOne = document.querySelector('.screen-one')
const screenTwo = document.querySelector('.screen-two')
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');

let randomNumber = Math.round(Math.random() * 10);
let numberAttempts = 1;

// Events
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', handleKeyDown);

// Functions
function handleTryClick(event){
  event.preventDefault();

  const inputNumber =  document.querySelector('#inputNumber');
  
  if(Number(inputNumber.value) == randomNumber){
    toggleScreen();
    screenTwo.querySelector('h2').innerText = `
      Parabéns! Você acertou em ${numberAttempts} tentativas
    `
  }else if(Number(inputNumber.value) > 10 || Number(inputNumber.value) < 1) {
    alert('Número escolhido tem que ser entre 0 e 10');
  }else if(inputNumber.value == ''){
    alert('Digite um número');
  }
  
  inputNumber.value = ""
  numberAttempts++
}


function handleKeyDown(e){
  if(e.key == 'Enter' && screenOne.classList.contains('hide')){
    handleResetClick()
  };
}

function handleResetClick(){
  toggleScreen();
  numberAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen(){
  screenOne.classList.toggle('hide');
  screenTwo.classList.toggle('hide');
};


