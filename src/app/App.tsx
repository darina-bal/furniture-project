import { BrowserRouter, Routes, Route } from 'react-router'
import Landing from '@/pages/Landing'
import Shop from '@/pages/Shop'
import './styles'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='shop' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App