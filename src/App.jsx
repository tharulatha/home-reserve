import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Cat from './components/Cat'
import Contact from './components/Contact'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from "./components/Header"
import Home from './components/Home'
import Property from './components/Property'
import Services from './components/Services'
import Whywe from './components/Whywe'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      {/* <Whywe /> */}
      <Services />
      <Property />
      <Features />
      <Blog />
      <Contact />
      <Cat />
      <Footer />
   </div>
  )
}

export default App
