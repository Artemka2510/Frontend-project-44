#!/usr/bin/env node
import hellouser from "../src/cli.js"; //1
import readlineSync from 'readline-sync';//2

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max-min)) //
};
const actions = ["+", "-", "*"];
const  randomAction = (arr) => {
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
};


const gameCalc = () => {
    const userName = hellouser(); //
    let k = 0; //
    console.log('What is the result of the expression?'); //
    while (k != 3) {//
        let a = randomNumber(1, 20);
        let b = randomNumber(1, 20);
        let action = randomAction(actions);
        console.log(`Question: ${a} ${action} ${b}`);
        let answer = readlineSync.question('Your answer: ');
        let result = eval(`${a} ${action} ${b}`);
        if (Number(answer) === result) {
            console.log('Correct!') //
            k += 1; //
        if (k === 3) { //
            console.log(`Congratulations, ${userName}!`); //
        }
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);//
            console.log(`Let's try again, ${userName}!`);//
            break;//
        }
    }
};
gameCalc();