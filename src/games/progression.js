import getGame from '../index.js';
import randomNumber from '../getRandomNumber.js';

const gamePhrase = ('What number is missing in the progression?');

const progression = (number, step, length) => {
  const line = [];
  for (let i = 0; i < length; i += 1) {
    const element = number + (step * i);
    line.push(element);
  }
  return line;
};

const game = () => {
  const length = randomNumber(5, 10);
  const index = randomNumber(1, 5);
  const step = randomNumber(1, 8);
  const number = randomNumber(2, 20);
  const line = progression(number, step, length);
  const answer = line[index];
  line[index] = '..';
  const quaere = line.join(' ');
  return [quaere, answer];
};

export default () => {
  getGame(gamePhrase, game);
};
