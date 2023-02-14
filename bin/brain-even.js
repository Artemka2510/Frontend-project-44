#!/usr/bin/env node
import hellouser from "../src/cli.js"; //1
import readlineSync from 'readline-sync'; //2

const phrase  ='Answer "yes" if the number is even, otherwise answer "no"';
const evenNumber = (number) => number % 2 === 0;
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max-min)) //
  };

const gameEven = () => {
    const userName = hellouser(); //3
    let k = 0;
    console.log(phrase); //4
    while (k != 3){ //5
        let number = randomNumber(1, 50);
        let correctAnswer = evenNumber(number) ? 'yes' : 'no';
        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer: '); //6
        
        if ((answer === 'no' && evenNumber(number) === false) || (answer === 'yes' && evenNumber(number) === true)) {
            console.log('Correct!') // 7
            k += 1; //
        if (k === 3) { //
            console.log(`Congratulations, ${userName}!`); //8
        }
        } else  {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`); //
            console.log(`Let's try again, ${userName}!`); //
            break; //
        } 
    }
};
gameEven()


