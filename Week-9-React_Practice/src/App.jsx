import { useEffect, useState } from 'react'

// useEffect, dependency array, cleanups
export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increase() {
    setCount(c => c + 1);
  }

  function decrease() {
    setCount2(c => c - 1);
  }

  return <div>
    <Counter count={count} count2={count2} />
    <button onClick={increase}>Increase Count</button>
    <button onClick={decrease}>Decrease Count</button>
  </div>
}

// mounting, re-rendering, unmounting
function Counter(props) {
  useEffect(function () {
    console.log("mount");

    return function () {
      console.log("unmount");
    }
  }, []) // empty dependecy array

  // only runs when count gets changed
  useEffect(function () {
    console.log("count has changed");
  }, [props.count]) // non empty dependency array
  
  // only runs when count2 gets changed
  useEffect(function () {
    console.log("count2 has changed");

    return function(){
      console.log("cleanup inside count2 effect");
    }
  }, [props.count2]) // non empty dependency array

  return <div>
    Counter1 {props.count} <br />
    Counter2 {props.count2} <br />
  </div>
}