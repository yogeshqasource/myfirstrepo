import { useState, useEffect } from 'react';
import TestButton  from './elements/TestButton';

export default function MyNewForm(props) {

    const [ increament, setIncrement ] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        console.log("Test");
        return () => {
            console.log("Unmount");
        }
    }, []);

    const handleButton = () => {
        if (increament > 10) {
            setIncrement(increament - 1);
        } else {
            setIncrement(increament + 1);
        }
    };

    return (
        <>
            {increament}
            <TestButton>My test button</TestButton>
            <button onClick={() => handleButton()}>Add</button>
        </>
    );
}
