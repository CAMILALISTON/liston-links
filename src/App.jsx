import './App.css'
import { FaGithubSquare } from "react-icons/fa";


import Linkedin from './components/Linkedin';
import Instagram from './components/Instagram';


function App() {
  

  return (
    <div className='container-app'>
      <h2>Camila Liston</h2>
      
        <a href="https://github.com/CAMILALISTON" className='links' target='blank'>
        <FaGithubSquare /> GitHub 
        </a>

        <Linkedin />

        <Instagram />
     
    </div>
  )
}

export default App
