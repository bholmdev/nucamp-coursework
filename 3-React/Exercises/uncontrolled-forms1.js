import { useState } from "react";

const ControlledForm = () => {
    const [inputValue, updateInputValue] = useState("");

    const handleChange = (e) => {
        console.log(e.target.value);
        updateInputValue(e.target.value);
    };

    return (
        <form>
            <input value={inputValue} onChange={handleChange} />
            {inputValue} && <button type="submit">Submit</button>
        </form>
    );
};

function App() {
    return <ControlledForm />
}

export default App;