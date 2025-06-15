import { useState } from 'react'
import { useCounter, useFetch, usePrev, useDebounce } from './hooks/exports'

function App() {
    function setDataToBackend() {
        fetch("api.amazon.com/search/");
    }

    const debouncedFn = useDebounce(setDataToBackend);

    return <div>
        <input type="text" onChange={debouncedFn}></input>
    </div>
}

function Counter() {
    const { count, increaseCount } = useCounter();

    return <div>
        <button onClick={increaseCount}>Increase {count}</button>
    </div>
}

export default App
