#!/usr/bin/env node
import hellouser from "../src/cli.js"
import readlineSync from 'readline-sync';

const phrase  ='Answer "yes" if the number is even, otherwise answer "no"';
const evenNumber = (number) => number % 2 === 0;
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max-min)) 
  };

const gameEven = () => {
    const userName = hellouser();
    let k = 0;
    console.log(phrase);
    while (k != 3){
        let number = randomNumber(1, 50);
        let correctAnswer = evenNumber(number) ? 'yes' : 'no';
        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer: ');
        
        if ((answer === 'no' && evenNumber(number) === false) || (answer === 'yes' && evenNumber(number) === true)) {
            console.log('Correct!')
            k += 1;
        if (k === 3) {
            console.log(`Congratulations, ${userName}!`);
        }
        } else  {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
            console.log(`Let's try again, ${userName}!`);
            break;
        } 
    }
};
gameEven()


