import getGame from '../index.js';
import randomNumber from '../getRandomNumber.js';

const actions = ['+', '-', '*'];
const randomAction = (arr) => {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
};

const gamePhrase = ('What is the result of the expression?');

const calculator = (a, b, action) => {
  switch (action) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error('error');
  }
};

const game = () => {
  const a = randomNumber(1, 20);
  const b = randomNumber(1, 20);
  const action = randomAction(actions);
  const result = calculator(a, b, action);
  return [`${a} ${action} ${b}`, result];
};
export default () => {
  getGame(gamePhrase, game);
};
