
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <div className='flex gap-1'>
      <Button startIcon={<PlusIcon size="lg"/>} size="sm" variant="primary" text="buttonHere" onClick={() => {}} />
      <Button endIcon={<ShareIcon size="md"/>} size="md" variant="secondary" text="buttonHereAgain" onClick={() => {}} />
    </div>
  )
}

export default App
