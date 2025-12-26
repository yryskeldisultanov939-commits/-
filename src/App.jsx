import { Routes, Route } from 'react-router-dom'
import Food from './components/Food'
import Home from './pages/Home'
import Fridge from './pages/Fridge'
import Chat from './pages/Chat'
import Add from "./pages/Add.jsx";

export default function App() {
  return (
    <>
      <Food />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fridge" element={<Fridge />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  )
}
