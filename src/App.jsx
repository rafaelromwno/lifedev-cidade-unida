import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { AuthProvider } from './context/AuthContext'

import { useAuthentication } from './hooks/useAuthetication'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dashboard from "./pages/Dashboard/Dashboard"
import CreatePost from "./pages/CreatePost/CreatePost"

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user == undefined

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando a página...</p>
  }

  return (
    <>
      <div>
        <AuthProvider value={{ user }}>
          <BrowserRouter>
            <Navbar />
            <div className='container'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
                <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
                <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />}/>
                <Route path='/posts/create' element={user ? <CreatePost /> : <Navigate to="/login" />}/>
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  )
}

export default App
