import { use, useState } from "react"

function App() {

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <ToggleMessage />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <PostComponent
              name={"Visual Studio Code"}
              subtitle={"13000 followers"}
              time={"3m ago"}
              image={"https://code.visualstudio.com/assets/images/code-stable.png"}
              description={"Visual Studio Code dummy PostComponent description."}
            />
            <br />
          </div>
          <div>
            <PostComponent
              name={"raman"}
              subtitle={"promoted"}
              time={"3m ago"}
              image={"https://code.visualstudio.com/assets/images/code-stable.png"}
              description={"Random bullshit"}
            />
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "grey", borderWidth: 1, padding: 20 }

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

  return(
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Message
      </button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>
  );
};

function PostComponent({ name, subtitle, time, image, description }) {
  return <div style={style}>
    <div style={{ display: "flex" }}>
      <img src={image} style={{
        width: 30,
        height: 30,
        borderRadius: 20
      }} />
      <div style={{ fontSize: 10, marginLeft: 10 }}>
        <b>
          {name}
        </b>
        <div>{subtitle}</div>
        {/* Conditional rendering using ternary operator */}
        {time !== undefined ? <div style={{ display: "flex" }}>
          <div>{time}</div>
          <img src={"https://static-00.iconduck.com/assets.00/clock-icon-256x256-ydb2989g.png"} style={{ width: 10, height: 10, paddingLeft: 5 }} />
        </div> : null}
      </div>
    </div>
    <div style={{ fontSize: 12 }}>
      {description}
    </div>
  </div>
};

export default App
