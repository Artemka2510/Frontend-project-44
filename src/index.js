import readlineSync from 'readline-sync';
import hellouser from './cli.js';

const maxRound = 3;

const getGame = (gamePhrase, game) => {
  const userName = hellouser();
  console.log(gamePhrase);
  for (let i = 0; i < maxRound; i += 1) {
    const [number, answer] = game();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(answer)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default getGame;
