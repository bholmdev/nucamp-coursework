// Example Two
import { useRef, useState, useEffect } from 'react';
const getRandomColor = () =>
    `#${Math.floor(Math.random() * 2 ** 24).toString(16)}`;

function App() {
    const divEl = useRef(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(divEl.current);
        divEl.current.style.backgroundColor = getRandomColor();
        // divEl.current.innerText = 'i am in control!!';
    }, [count]);

    return (
        <div>
            <div ref={divEl} style={msgStyle}>
                {count}
            </div>
            <button onClick={() => setCount(count + 1)} style={btnStyle}>
                click me
            </button>
        </div>
    );
}

const msgStyle = {
    backgroundColor: 'aqua',
    borderRadius: '1rem',
    color: 'white',
    margin: '2rem',
    padding: '2rem',
    width: '2rem'
};

const btnStyle = {
    backgroundColor: 'gray',
    border: 'none',
    borderRadius: '1rem',
    color: 'white',
    padding: '1rem',
    margin: '2rem',
    fontSize: '2rem',
    width: '6rem'
};

export default App;