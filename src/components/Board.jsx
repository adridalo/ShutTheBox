import Tile from "./Tile";
import { useEffect, useState } from "react";

const Board = ({ total, reset }) => {

    const [selectedTiles, setSelectedTiles] = useState([]);
    const [winStatus, setWinStatus] = useState('');
    const audio = new Audio()
    audio.volume = 0.1

    const generateTiles = () => {
        const tiles = []
        for(let i = 1; i <= 12; i++) {
            tiles.push(<Tile value={i}/>)
        }
        return tiles;
    }

    const onButtonStatus = () => {
        document.querySelector('#win-status').style.display = 'block';
    }

    useEffect(() => {
        if(total !== 0) {
            if(selectedTiles.includes(total)) {
                audio.src = "./audio/wrong.mp3"
                audio.play()
                document.getElementById("roll-btn").disabled = true
                setWinStatus('You Lose!')
                onButtonStatus()
                reset();
            }
            if(selectedTiles.length === 12) {
                audio.src = "./audio/ding.mp3"
                audio.play()
                setWinStatus('You Win!')
                onButtonStatus()
                reset();
            }
            const updatedTiles = [...selectedTiles]
            updatedTiles.push(total)
            document.querySelectorAll('.tile')[total - 1].classList.add('filled-tile');
            setSelectedTiles(updatedTiles);
        }
    }, [total])

    return (
        <div id="board">
            <div id="tiles">
                {generateTiles()}
            </div>
            <p id="win-status">{winStatus}</p>
        </div>
    );
}
 
export default Board;