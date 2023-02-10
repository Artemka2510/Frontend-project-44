#!/usr/bin/env node
import hellouser from "../src/cli.js"
import readlineSync from 'readline-sync';

const phrase  ='Answer "yes" if the number is even, otherwise answer "no"';
const evennumber = (number) => number % 2 === 0;
const randomnumber = (min, max) => {
    return Math.floor(Math.random() * (max-min)) 
  };

const gameeven = () => {
    const userName = hellouser();
    let k = 0;
    console.log(phrase);
    while (k != 3){
        let number = randomnumber(1, 50);
        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer: ');
        
        if ((answer === 'no' && evennumber(number) === false) || (answer === 'yes' && evennumber(number) === true)) {
            console.log('Correct!')
            k += 1;
        if (k === 3) {
            console.log(`Congratulations, ${userName}!`)
        }
        } else if (answer === 'yes' && evennumber(number) === false) {
            console.log('"yes" is wrong answer ;(. Correct answer was "no".');
            console.log(`Let's try again, ${userName}!`);
            break;
        } else if (answer === 'no' && evennumber(number) === true) {
            console.log('"no" is wrong answer ;(. Correct answer was "yes".');
            console.log(`Let's try again, ${userName}!`);
            break;
        } else if (answer != 'yes' || answer != 'no') {
            if (evennumber(number) === true) {
                console.log(`${answer} is wrong answer ;(. Correct answer is "yes"`)
                console.log(`Let's try again, ${userName}!`)
            } else {
                console.log(`${answer} is wrong answer ;(. Correct answer is "no"`)
                console.log(`Let's try again, ${userName}!`)
            }
            break;
        }
    }
};
gameeven()


