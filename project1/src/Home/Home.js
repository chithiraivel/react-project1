import React from 'react'
import Header from '../Header/Header'

const Home = () => {

   const obj={name:'react',feature:'props'};
  return (
    <div>
       
        <Header obj={obj} />
        
    </div>
  )
}

export default Home