import { Routes,Route } from 'react-router-dom'
import CityIntelligence from './pages/Cityintelligence/index'
import Home from './pages/Home'
import Report from './pages/Report'
import Issue from './pages/Issue'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/city-intelligence' element={<CityIntelligence />} />
      <Route path='/report' element={<Report />} />
      <Route path='/issue' element={<Issue />} />
    </Routes>

  )
}
export default App