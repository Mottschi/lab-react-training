import {React, useState} from 'react';
import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import './Dice.css';

function Dice() {
  const dice = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [currentDie, setCurrentDie] = useState(emptyDice)

  function handleClick() {
    setCurrentDie(emptyDice);
    setTimeout(() => {
      setCurrentDie(dice[Math.floor(Math.random() * dice.length)]);
    }, 1000);
  }

  return (
    <div className="Dice">
      <img onClick={handleClick} src={currentDie} alt="" />
    </div>
  )
}

export default Dice