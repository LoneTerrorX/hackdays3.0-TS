import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'

import EventShowcase from './components/EventCard'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/register" element={<EventShowcase/>}/>
   
    </Routes>
    
    </BrowserRouter>
  
  )
}

export default App