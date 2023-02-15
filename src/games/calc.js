import getGame from "../index.js";
import randomNumber from "../getRandomNumber.js";

const actions = ["+", "-", "*"];
const  randomAction = (arr) => {
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
};

const gamePhrase = ('What is the result of the expression?')

const game = () => {
    const a = randomNumber(1, 20);
    const b = randomNumber(1, 20);
    const action = randomAction(actions);
    const result = eval(`${a} ${action} ${b}`);
    return [`${a} ${action} ${b}`, result];
};
export default () => {
    getGame(gamePhrase, game);
};
