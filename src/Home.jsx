import React, { useEffect, useState } from 'react'
import Card from "./components/Card"
import Navbar from './components/Navbar'

const Home = () => {
  const [beers, setBeers] = useState([])

  const getBeers = async()=>{
    const res = await fetch("https://api.sampleapis.com/beers/ale")
    const data = await res.json()
    setBeers(data)
  }

  useEffect(()=>{
    getBeers()
  }, [])

  return (
    <>
    <Navbar/>
    <div className='grid'>
        {beers.length 
           ? beers.map(beer => (<Card key={beer.id} data={beer} />))
           : <h2>cargando</h2>
        }
    </div>
    </>
  )
}

export default Home