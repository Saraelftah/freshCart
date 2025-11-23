import { Suspense } from 'react'
import './App.css'
import AppRoutes from './Routes/AppRoutes'
import Loader from './components/Loader/Loader'

function App() {

  return (
    <>
    <Suspense fallback ={<Loader/>} >
      <AppRoutes />
    </Suspense>
    </>
  
  )
}

export default App
