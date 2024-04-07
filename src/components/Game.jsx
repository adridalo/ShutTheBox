import Board from './Board';
import Die from './Die';

const Game = ({ total }) => {

    const generateDice = () => {
        const dice = []
        for(let i = 0; i < 2; i++) {
            dice.push(<Die defaultValue=""/>)
        }
        return dice
    }

    const reset = () => {
        setTimeout(() => window.location.reload(), 2000)
    }

    return ( 
        <>
            <Board 
                total={total}
                reset={reset}
            />
            <div id="dice">
                {generateDice()}
            </div>
        </>
    );
}
 
export default Game;