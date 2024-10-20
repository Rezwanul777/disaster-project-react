
import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import Navbar from './shared/Navbar'

function App() {
  const navigation=useNavigation()

  if(navigation.state==="loading"){
    return <h1 className='text-center mx-auto text-orange '>Loading...</h1>
  }

  return (
    <>
     <Navbar/>
     <Outlet/>
    </>
  )
}

export default App
