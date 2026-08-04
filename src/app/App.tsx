import { BrowserRouter, Routes, Route } from 'react-router'
import Landing from '@/pages/Landing'
import Shop from '@/pages/Shop'
import NotificationBar from '@/widgets/NotificationBar'
import Header from '@/widgets/Header'
import GlobalFlyouts from './providers/GlobalFlyouts'
import './styles'

const App = () => {
  return (
    <BrowserRouter>
      <NotificationBar />
      <Header />
      <GlobalFlyouts />
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='shop' element={<Shop />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App