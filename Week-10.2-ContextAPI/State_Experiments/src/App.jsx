import { createContext, useContext, useState } from 'react'
import './App.css'

const BulbContext = createContext();

function BulbProvider({ children }) {
    const [bulbOn, setBulbOn] = useState(true);

    return <BulbContext.Provider value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn
    }}>
        {children}
    </BulbContext.Provider>
}

function App() {

    return <div>
        <BulbProvider>
            <Light />
        </BulbProvider>
    </div>
}

function Light() {
    return <div>
        <LightBulb />
        <LightSwitch />
    </div>
}

function LightBulb() {
    const { bulbOn } = useContext(BulbContext);

    return <div>
        {bulbOn ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR91NvkNwNEJlRkrpEniioM3EmcZJADFOgfw&s" /> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-j_VE71Me7X6rIU_0JKdETKfBJ6YqR2LLpw&s" />}
    </div>
}



function LightSwitch() {
    const { bulbOn, setBulbOn } = useContext(BulbContext);

    function toggle() {
        // setBulbOn(c => !c);
        setBulbOn(!bulbOn);
    }

    return <div>
        <button onClick={toggle}>Toggle</button>
    </div>
}

export default App
