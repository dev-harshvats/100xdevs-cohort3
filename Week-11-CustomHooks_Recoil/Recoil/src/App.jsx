import { memo, useEffect, useState } from 'react'
import './App.css'

function App() {
	return (
		<Counter />
	)
}

function Counter() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setCount(c => c + 1)
		}, 3000)
	}, []);

	return (
		<div>
			<CurrentCount count={count}/>
			<Increase />
			<Decrease />
		</div>
	)
}

const CurrentCount = memo(function ({count}) {

	return (
		<div>
			{count}
		</div>
	)
})

const Increase = (function () {

	function increase() {
		// setCount(c => c + 1);
	}

	return <div>
		<button onClick={increase}>Increase</button>
	</div>
})

const Decrease = memo(function () {

	function decrease() {
		// setCount(c => c - 1);
	}

	return <div>
		<button onClick={decrease}>Decrease</button>
	</div>
})

export default App
