import { use, useState } from "react"
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

  const [posts, setPosts] = useState([]);

  const postComponents = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.title}
    image={post.image}
    description={post.description}
  />)

  function addPost() {
    setPosts([...posts, {
      name: "harkirat",
      subtitle: "10000 followers",
      time: "2m ago",
      image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "What to know how to win big? Check out how these folks won $6000 in bounties."
    }])
  }

  return (
    <div style={{background: "#dfe6e9", height: "100vh", }}>
      <button onClick={addPost}>Add Post</button>
      <div style={{display: "flex", justifyContent: "center" }}>
        <div>
          {postComponents}
        </div>
      </div>
    </div>
  )
}


// function ToggleMessage() {
//   const [isVisible, setIsVisible] = useState(false); // defining a new state variable
//   // When the value of a state variable changes,
//   // the component that uses the state variable re-renders

//   return(
//     <div>
//       <button onClick={() => setIsVisible(!isVisible)}>
//         Toggle Message
//       </button>
//       {isVisible && <p>This message is conditionally rendered!</p>}
//     </div>
//   );
// };

// function IncrementNotifications(){
//   let [notificationCount, setNotificationCount] = useState(0);

//   function increment(){
//     setNotificationCount(notificationCount + 1);
//   }

//   return (
//     <div>
//       <button onClick={increment}>
//         Notifications
//       </button>
//       {notificationCount}
//     </div>
//   );
// };

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

export default App
