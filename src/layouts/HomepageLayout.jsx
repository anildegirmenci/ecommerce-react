import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const HomepageLayout = props => {
  return (
    <div className='fullHeight'>
        <Header />
        <div className="main">
            {props.children}
            <Footer />
        </div>
        
    </div>
  )
}

export default HomepageLayout