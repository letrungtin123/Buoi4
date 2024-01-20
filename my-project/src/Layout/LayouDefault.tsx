import React from 'react'
import Header from './header'
import Content from './content'
import Footer from './footer'

const LayouDefault = () => {
  return (
    <div className='flex flex-col min-h-screen '>
        <Header/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default LayouDefault