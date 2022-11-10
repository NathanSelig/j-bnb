import React from 'react'
import HistInfo from './components/histInfo'
import NavBar from './components/navbar'

function App() {
  return (
    <div className='scrollbar-hide'>
      <NavBar />
      <div className='flex h-screen w-full'>
        <div className="bg-main bg-cover bg-center bg-no-repeat flex-1">
          <HistInfo />
        </div>
      </div>
    </div>
  )
}

export default App
