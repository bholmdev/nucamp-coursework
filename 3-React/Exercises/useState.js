import { useState } from "react";

const App = () => {
    // const retValFromUseState = useState(0);
    // const myCounter = retValFromUseState[0];
    // const setMyCounter = retValFromUseState[1];

    const [myCounter, setMyCounter] = useState(0);
    // const [name, setName] = useState("Irene");

    return (
        <div onClick={() => setMyCounter(myCounter + 1)}>
            Count: {myCounter}
        </div>
    );
}

export default App;