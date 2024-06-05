import { useState } from 'react'
import {Routes,Route,BrowserRouter} from "react-router-dom"
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Createuser from './Createuser'
import Users from './Users'
import Updateuser from './Updateuser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='/create' element={<Createuser/>}/>
        <Route path='update/:id' element={<Updateuser/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
