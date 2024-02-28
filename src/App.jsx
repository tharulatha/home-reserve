import './App.css'
import About from './components/About'
import Blog from './components/Blog'
import Cat from './components/Cat'
import Contact from './components/Contact'
import Features from './components/Features'
import Header from "./components/Header"
import Home from './components/Home'
import Property from './components/Property'
import Services from './components/Services'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Property />
      <Features />
      <Blog />
      <Cat />
      <Contact />
   </div>
  )
}

export default App
