import { useState } from 'react'
import { useCounter, useFetch, usePrev } from './hooks/exports'

function App() {
    const [state, setState] = useState(0);
    const prev = usePrev(state);

    return <div>
        <p>{state}</p>
        <button onClick={() => {setState(curr => curr + 1)}}>Click Me</button>
        <p>The previous value was {prev}</p>
    </div>
}

function Counter() {
    const { count, increaseCount } = useCounter();

    return <div>
        <button onClick={increaseCount}>Increase {count}</button>
    </div>
}

export default App
