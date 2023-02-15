// Example One
import { useRef, useState } from 'react';

function App() {
    const valueWithRef = useRef('not clicked yet');
    let valueWithoutRef = 'not clicked yet';
    const [timesClicked, updateClicked] = useState(0);

    const handleClick = () => {
        valueWithRef.current = 'CLICKED!!';
        valueWithoutRef = 'CLICKED!!';
        console.log('valueWithRef:', valueWithRef.current);
        console.log('valueWithoutRef:', valueWithoutRef);
        updateClicked(timesClicked + 1);
    };

    return (
        <div className='App'>
            <div>value with ref: {valueWithRef.current}</div>
            <div>value without ref: {valueWithoutRef}</div>
            <div>timesClicked: {timesClicked}</div>
            <button onClick={() => handleClick()}>click me</button>
        </div>
    );
}

export default App;