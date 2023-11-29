
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import SingleBlogPets from './pages/SingleBlogPets'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/blog/mypets' element={<SingleBlogPets />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
