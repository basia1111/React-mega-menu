
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './components/pages/Home'
import { About } from './components/pages/About'
import { Services } from './components/pages/Services'
import { Resources } from './components/pages/Resources'
import { Solutions } from './components/pages/Solutions'
import { NotFound } from './components/pages/NotFound'



function App() {

  return(
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/resources' element={<Resources />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/solutions' element={<Solutions />}/>
      <Route path='/*' element={<NotFound />}/>
    </Routes>
    </>
  )

}

export default App
