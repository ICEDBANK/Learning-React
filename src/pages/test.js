import { useState } from "react";

function Test(){

    // Define state variables for string, number, and array
    const [myString, setMyString] = useState('Hello Motto');
    const [myNum, setMyNum] = useState(1);
    const [myArray, setMyArray] = useState([
        { name: "Apple", color: "Red" },
        { name: "Peach", color: "peach" },
        { name: "Orange", color: "orange" },
        { name: "Grape", color: "Purple" }
    ]);
    
    // Function to update string state
    const doSomething = () => {
        setMyString('Life is Good');
    }

    // Function to update number state
    const playNum = () => {
        setMyNum(myNum * 2);
    }

    // JSX markup to render inputs, buttons, and list
    return(
        <>
            <input type="text" value={myString} />
            <button onClick={doSomething}>Click Me!</button>
            <input type="text" value={myNum} />
            <button onClick={playNum}>Click Me!</button>
            <ul>
                {/* Map over array and render list items */}
                {myArray.map((data , index) => (
                    <li key={index}>
                        <p>{data.name}</p>
                        <p>{data.color}</p>
                    </li>
                ))}
            </ul>
            <input type="text" />
            <button>Click Me!</button>
        </>
    );

}

export default Test;
