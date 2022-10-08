import {useState} from "react";

export const useProduct = (initialValue: number) => {
    const [counter, setCounter] = useState(initialValue);

    const handleCount = (value: number) => {
        setCounter(prevState => Math.max(prevState + value, 0));
    }

    return {counter, handleCount}
}