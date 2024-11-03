
import './App.css'

import CustomNav from './components/CustomNav/CustomNav'
import LineChart from './components/LineChart/LineChart'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import RenderBarChart from './components/RenderBarChart/RenderBarChart'

function App() {
  

  return (
    <>
      <CustomNav></CustomNav>
      {/* <Navbar></Navbar> */}
      <h1 className='text-5xl font-bold'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <RenderBarChart></RenderBarChart>
    </>
  )
}

export default App
