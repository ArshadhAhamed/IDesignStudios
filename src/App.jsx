import ProjectSection from './components/ProjectSection'
import './App.css'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <ProjectSection/>
      </>
  )
}

export default App
