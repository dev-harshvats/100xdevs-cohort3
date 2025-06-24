import './App.css'

function App() {

  return (
    <>
      {/* colored divs and flexbox */}
      <div className='bg-blue-300'>hi there</div>
      <div className='flex justify-between bg-blue-600'>
        {/* this is same as display: "flex", justify-content: "space-between" */}
        <div className='bg-green-300'>1st</div>
        <div className='bg-yellow-300'>2nd</div>
        <div className='bg-pink-300'>3rd</div>
      </div>
      
      {/* text size */}
      <div className='bg-green-500 text-red-500 text-5xl rounded-full'>
        Green div with red text of 5xl size that is rounded full
      </div>

      {/* grids */}
      <div className='grid grid-cols-12'>
        <div className='col-span-5 bg-red-300'>1st</div>
        <div className='col-span-5 bg-green-300'>2nd</div>
        <div className='col-span-2 bg-blue-300'>3rd</div>
      </div>

      {/* breakpoint */}
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-1 sm:col-span-5 bg-red-300'>Red</div>
        <div className='col-span-1 sm:col-span-5 bg-green-300'>Green</div>
        <div className='col-span-1 sm:col-span-2 bg-blue-300'>Blue</div>
      </div>
    </>
  )
}

export default App
