import { Routes, Route } from 'react-router-dom'
import Food from './components/Food'
import Home from './pages/Home'
import Fridge from './pages/Fridge'
import Chat from './pages/Chat'
import Add from "./pages/Add.jsx";
import Resept from "./pages/Resept.jsx";
import Profile from './pages/Profile.jsx'
import Settings from './pages/Settings'; 

export default function App() {
  return (
    <>
      <Food />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        
        <Route path="/fridge" element={<Fridge />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/add" element={<Add />} />
        <Route path="/resept" element={<Resept />} />
      </Routes>
    </>
  )
}
