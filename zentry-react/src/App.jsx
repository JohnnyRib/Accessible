import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import EventList from './pages/EventList'
import EventDetail from './pages/EventDetail'
import Search from './pages/Search'
import Profile from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/login"       element={<Login />} />
        <Route path="/register"    element={<Register />} />
        <Route path="/events"      element={<EventList />} />
        <Route path="/events/:id"  element={<EventDetail />} />
        <Route path="/search"      element={<Search />} />
        <Route path="/profile"     element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
