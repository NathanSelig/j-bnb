/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Activities from './components/activites'
import HistInfo from './components/histInfo'
import HostInfo from './components/hostInfo'
import NavBar from './components/navbar'
import Reviews from './components/reviews'
import Footer from './components/footer'


function App() {



  return (
    <div >
      <NavBar />
      <div>
        <div className='flex'>
          <HistInfo />
          <HostInfo Reviews={[]} />
        </div>
        <div className='flex'>
          <Activities />
        </div>
      </div>

      <div className='flex'>
        <Reviews />
      </div>
      <Footer />
    </div>
  )
}

export default App
