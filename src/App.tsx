
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './pages/Login';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes >
    </BrowserRouter>
  )
}

export default App
