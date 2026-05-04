import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Announcements from './pages/Announcements'
import Calendar from './pages/Calendar'

/**
 * App.jsx — Root router
 *
 * Uses HashRouter so the site works on GitHub Pages without server config.
 * Routes: / | /about | /announcements | /calendar
 */
export default function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"             element={<Home />} />
            <Route path="/about"        element={<About />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/calendar"     element={<Calendar />} />
            {/* Fallback — redirect to home */}
            <Route path="*"             element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
