console.log('hi');

const arr = [['to do', 'делать'], ['to run', 'бегать'], ['to speak', 'говорить']];

const word = document.querySelector('.one');
const translation = document.querySelector('.two');
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const flashcard = document.querySelector('.flashcard');
const next = document.querySelector('.next');

let num = 0;

word.innerHTML = arr[num][0];
translation.innerHTML = arr[num][1];

console.log(word);
console.log(translation);

function click(){
    let value;
    button.onclick = () =>{
        value = input.value;
        console.log(value);
        if (value === translation.innerHTML){
            flashcard.style.background = 'green';
            translation.classList.add('correct');
            translation.classList.remove('two');
        } else {
            flashcard.style.background = 'red';
            translation.classList.add('two');
            translation.classList.remove('correct');
        }
    }
}

function nextWord(){
    next.onclick = () =>{
        if (num === arr.length-1){
            return
        } else {
            num++;
            console.log(num);
            flashcard.style.background = 'white';
            translation.classList.remove('correct');
            translation.classList.add('two');
            word.innerHTML = arr[num][0];
            translation.innerHTML = arr[num][1];
        }
    }
    

}
click();
nextWord();
