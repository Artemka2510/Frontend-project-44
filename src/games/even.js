import getGame from '../index.js';
import randomNumber from '../getRandomNumber.js';

const evenNumber = (number) => number % 2 === 0;

const gamePhrase = ('Answer "yes" if the number is even, otherwise answer "no"."');

const game = () => {
  const number = randomNumber(1, 50);
  const correctAnswer = evenNumber(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => {
  getGame(gamePhrase, game);
};
