
import './App.css'
import CustomNav from './components/CustomNav/CustomNav'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {
  

  return (
    <>
      <CustomNav></CustomNav>
      {/* <Navbar></Navbar> */}
      <h1 className='text-5xl font-bold'>Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
