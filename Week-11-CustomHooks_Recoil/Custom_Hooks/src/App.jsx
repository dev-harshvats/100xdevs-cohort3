import { useState } from 'react'
import { useCounter, useFetch } from './hooks/exports'

function App() {
    const [currentPost, setCurrentPost] = useState(1);
    const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

    if(loading){
        return <div>
            Loading...
        </div>
    }

    return <div>
        <Counter />
        <button onClick={() => setCurrentPost(currentPost => currentPost + 1)}>Next Post</button>
        <button onClick={() => setCurrentPost(currentPost => currentPost - 1)}>Previous Post</button>
        {JSON.stringify(finalData)}
    </div>
}

function Counter() {
    const { count, increaseCount } = useCounter();

    return <div>
        <button onClick={increaseCount}>Increase {count}</button>
    </div>
}

export default App
