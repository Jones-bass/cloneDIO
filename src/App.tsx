import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { GlobalStyle } from './styles/global'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Feed } from './pages/feed'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
