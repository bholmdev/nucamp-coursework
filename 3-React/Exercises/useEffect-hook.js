const SomeComponent = () => {
    useEffect(() => {
        setTimeout(peaceOnEarth, 10000000);
    }, []);

    return (
        <div>
            ...
        </div>
    );
}

// OR....

const SomeComponent2 = () => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        let peace;
        if (toggle) {
            peace = setTimeout(peaceOnEarth, 2000);
        }
        return () => {
            clearTimeout(peace);
        }
    }, [toggle]);

    return (
        <button onClick={() => setToggle(true)}>click for peace on earth</button>
    );
}