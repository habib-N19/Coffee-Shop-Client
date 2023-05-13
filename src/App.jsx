import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'

function App () {
  const [count, setCount] = useState(0)
  const coffees = useLoaderData()
  return (
    <div className='m-20'>
      <h2 className='text-6xl my-20 text-purple-600 text-center'>
        Coffee Shop: {coffees.length}
      </h2>
      <div className='grid md:grid-cols-2 gap-4'>
        {coffees.map(coffee => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  )
}

export default App
