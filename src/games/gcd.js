import getGame from '../index.js';
import randomNumber from '../getRandomNumber.js';

const gamePhrase = ('Find the greatest common divisor of given numbers.');

const gcd = (x, y) => {
  let res = 1;
  let a = x;
  let b = y;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  res = a;
  return res;
};

const game = () => {
  const a = randomNumber(1, 50);
  const b = randomNumber(51, 100);
  const correctAnswer = gcd(a, b);
  return [`${a} ${b}`, correctAnswer];
};
export default () => {
  getGame(gamePhrase, game);
};
