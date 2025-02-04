
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Navbar } from './Components/Navbar/Navbar'
import { Projects } from './Pages/Projects'
import { ContactPage } from './Pages/Contact'
import { Certifications } from './Pages/Certifications'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Contact' element={<ContactPage/>}/>
          <Route path='/Certifications' element={<Certifications/>}/>

        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
