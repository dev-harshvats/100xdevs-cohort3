import React from "react"
import { useEffect, useState } from "react"
import { PostComponent } from "./Post"

function App() {

  // remove comment for PostComponent block of 1st commit
  // return (
  //   <div style={{ background: "#dfe6e9", height: "100vh" }}>
  //     {/* <div style={{ display: "flex", justifyContent: "center" }}>
  //       <div>
  //         <div>
  //           <PostComponent
  //             name={"Visual Studio Code"}
  //             subtitle={"13000 followers"}
  //             time={"3m ago"}
  //             image={"https://code.visualstudio.com/assets/images/code-stable.png"}
  //             description={"Visual Studio Code dummy PostComponent description."}
  //           />
  //           <br />
  //         </div>
  //         <div>
  //           <PostComponent
  //             name={"raman"}
  //             subtitle={"promoted"}
  //             time={"3m ago"}
  //             image={"https://code.visualstudio.com/assets/images/code-stable.png"}
  //             description={"Random bullshit"}
  //           />
  //           <br />
  //         </div>
  //       </div>
  //     </div> */}
  //   </div>
  // )


  // remove comment for toggle message block
  // return (
  //   <div style={{ background: "#dfe6e9", height: "100vh" }}>
  //     {/* <ToggleMessage />
  //     <IncrementNotifications /> */}
  //   </div>
  // )


  // remove comments for Add Post button (using useState)
  // const [posts, setPosts] = useState([]);

  // const postComponents = posts.map(post => <PostComponent
  //   name={post.name}
  //   subtitle={post.subtitle}
  //   time={post.title}
  //   image={post.image}
  //   description={post.description}
  // />)

  // function addPost() {
  //   setPosts([...posts, {
  //     name: "harkirat",
  //     subtitle: "10000 followers",
  //     time: "2m ago",
  //     image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
  //     description: "What to know how to win big? Check out how these folks won $6000 in bounties."
  //   }])
  // }

  // return (
  //   <div style={{background: "#dfe6e9", height: "100vh", }}>
  //     <button onClick={addPost}>Add Post</button>
  //     <div style={{display: "flex", justifyContent: "center" }}>
  //       <div>
  //         {postComponents}
  //       </div>
  //     </div>
  //   </div>
  // )


  // remove comments for useEffect
  // const [count, setCount] = useState(1);
  // function increaseCount() {
  //   setCount(currentValue => currentValue + 1);
  // }
  // useEffect(function () {
  //   console.log("above setInterval");
  //   setInterval(increaseCount, 1000);
  // }, [])  // this effect will run on mount, because the array is empty
  // useEffect(function () {
  //   console.log("the count has been updated to " + count);
  // }, [count]);  // this effect will run when "count" changes, "count" is a dependency here
  // return <div>
  //   {count}
  // </div>

  // linkedin like top bar buttons
  // const [currentTab, setCurrentTab] = useState("feed");
  // return <div>
  //   <button style={{color: currentTab == "feed" ? "red" : "black"}} onClick={() => setCurrentTab("feed")}>Feed</button>
  //   <button style={{color: currentTab == "notifications" ? "red" : "black"}} onClick={() => setCurrentTab("notifications")}>Notifications</button>
  //   <button style={{color: currentTab == "messages" ? "red" : "black"}} onClick={() => setCurrentTab("messages")}>Messages</button>
  //   <button style={{color: currentTab == "jobs" ? "red" : "black"}} onClick={() => setCurrentTab("jobs")}>Jobs</button>
  // </div>


  // remove comments for Cleanup
  // const [showTimer, setShowTimer] = useState(true);
  // useEffect(() => {
  //   setInterval(() => {
  //     setShowTimer(currentValue => !currentValue);
  //   }, 5000);
  // }, []);
  // return <div>
  //   {showTimer && <Timer />}
  // </div>


  //remove comments for children
  // return (
  //   <div>
  //     <Card>
  //       <h2>Card Title</h2>
  //       <p>This is some content inside the card.</p>
  //     </Card>
  //     <Card>
  //       <h2>Another Card</h2>
  //       <p>This card has different content!</p>
  //     </Card>
  //   </div>
  // )

  return (
    <div>
      <ErrorBoundary>
        <Card1 />
      </ErrorBoundary>
      <ErrorBoundary>
        <Card2 />
      </ErrorBoundary>
    </div>
  )
}


function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false); // defining a new state variable
  // When the value of a state variable changes,
  // the component that uses the state variable re-renders

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Message
      </button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>
  );
};

function IncrementNotifications() {
  let [notificationCount, setNotificationCount] = useState(0);

  function increment() {
    setNotificationCount(notificationCount + 1);
  }

  return (
    <div>
      <button onClick={increment}>
        Notifications
      </button>
      {notificationCount}
    </div>
  );
};

// function PostComponent({ name, subtitle, time, image, description }) {
//   return <div style={style}>
//     <div style={{ display: "flex" }}>
//       <img src={image} style={{
//         width: 30,
//         height: 30,
//         borderRadius: 20
//       }} />
//       <div style={{ fontSize: 10, marginLeft: 10 }}>
//         <b>
//           {name}
//         </b>
//         <div>{subtitle}</div>
//         {/* Conditional rendering using ternary operator */}
//         {time !== undefined ? <div style={{ display: "flex" }}>
//           <div>{time}</div>
//           <img src={"https://static-00.iconduck.com/assets.00/clock-icon-256x256-ydb2989g.png"} style={{ width: 10, height: 10, paddingLeft: 5 }} />
//         </div> : null}
//       </div>
//     </div>
//     <div style={{ fontSize: 12 }}>
//       {description}
//     </div>
//   </div>
// };

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let clock = setInterval(() => {
      console.log("from inside clock");   // this keeps on logging even when the showTimer becomes false, hence Cleanup comes in picture
      setSeconds(prev => prev + 1);
    }, 1000);

    // cleanup function
    return function () {
      clearInterval(clock);
    }
  }, []);

  return <div>{seconds} seconds elapsed</div>;
};

// Children
const Card = ({ children }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '20px',
      margin: '10px',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
    }}>
      {children}
    </div>
  )
}


// Error boundary (both functions, Card1 and Card2)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>
    }

    return this.props.children;
  }
}
function Card1() {
  return <div style={{ background: "red", borderRadius: 20, padding: 20, margin: 20 }}>
    Card1 content
  </div>
}
function Card2() {
  return <div style={{ background: "red", borderRadius: 20, padding: 20, margin: 20 }}>
    Card2 content
  </div>
}

export default App
