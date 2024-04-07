import { useState } from 'react';
import Game from './Game';

function App() {
    const [total, setTotal] = useState(0);
    const [rollStaus, setRollStatus] = useState('Roll to determine total!');

    const handleRoll = async () => {
      setRollStatus('Rolling...')
      let currentRoll = 0;
      const rollPromises = [];

      document.querySelectorAll('.die').forEach(die => {
        const promise = new Promise(resolve => {
          die.click()
          setTimeout(() => {
            currentRoll += parseInt(die.textContent)
            resolve()
          }, 1700)
        })
        rollPromises.push(promise)
      })

      await Promise.all(rollPromises)

      setTotal(currentRoll)
      setRollStatus('You rolled a ' + currentRoll)
    }

    return (
        <div className="App">
            <h1><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Shut the Box</a></h1>

            <Game total={total}/>

            <button 
                onClick={handleRoll}
                id="roll-btn"
            >
                Roll
            </button>

            <p id="roll-status">{rollStaus}</p>
        </div>
    );
}

export default App;