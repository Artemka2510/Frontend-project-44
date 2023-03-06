import getGame from '../index.js';
import randomNumber from '../getRandomNumber.js';

const gamePhrase = ('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const game = () => {
  const a = randomNumber(1, 101);
  const correctAnswer = isPrime(a) ? 'yes' : 'no';
  return [a, correctAnswer];
};

export default () => {
  getGame(gamePhrase, game);
};
