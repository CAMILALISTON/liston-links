import './App.css'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


function App() {
  

  return (
    <div className='container-app'>
      <h2>Camila Liston</h2>
      
        <a href="https://github.com/CAMILALISTON" className='links' target='blank'>
        <FaGithubSquare /> GitHub 
        </a>
        <a href="https://www.linkedin.com/in/camila-liston/" className='links' target='blank'>
        <FaLinkedin />Linkedin
        </a>
        <a href="https://www.instagram.com/camilaliston/#" className='links' target='blank'>
        <FaInstagram /> Instagram
        </a>
     
    </div>
  )
}

export default App
