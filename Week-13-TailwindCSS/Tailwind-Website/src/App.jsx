import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input'

function App() {

  return (
    <div className='h-screen bg-blue-700'>
      <Input type="text" placeholder={"Username"}></Input>
      <Button disabled={true}>Sign up</Button>
    </div>
  )
}

export default App
