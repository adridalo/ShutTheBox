import { useState } from "react";
import { roll, generateRandomString, randomRGB } from "../utils";

const Die = ({ defaultValue = roll() }) => {

    const [faceValue, setFaceValue] = useState(defaultValue);

    const handleRoll = e => {
        if(!e.target.classList.contains('die')) return

        const die = e.target

        const roller = setInterval(() => {
            die.style.color = randomRGB()
            setFaceValue(generateRandomString(1))
        }, 200)

        setTimeout(() => {
            const currentRoll = roll()
            setFaceValue(currentRoll)
            die.style.color = 'black'
            clearInterval(roller)
        }, 1500)
    }

    return (  
        <div
            className="die"
            onClick={handleRoll}
        >
            <p key={faceValue} id="face-value">{faceValue}</p>
        </div>
    );
}
 
export default Die;