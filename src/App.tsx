import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/global'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Feed } from './pages/feed'
import { Registration } from './pages/Registration'
import { AuthContextProvider } from './context/auth'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
