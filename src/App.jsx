import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dashboard from "./pages/Dashboard/Dashboard"
import CreatePost from "./pages/CreatePost/CreatePost"
import { AuthProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useAuthentication } from './hooks/useAuthetication'
import Search from './pages/Search/Search'
import Post from './pages/Post/Post'
import EditPost from './pages/EditPost/EditPost'

function App() {

  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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

                <Route path="/posts/edit/:id" element={ user? <EditPost/> : <Navigate to="/login" />} />
                <Route path="/posts/create" element={user ? <CreatePost /> : <Navigate to="/login" />} />
                <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
                <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
                <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
                <Route path="/search" element={!user ? <Search /> : <Navigate to="/" />} />
                <Route path='/posts/:id' element={user ? <Post /> : <Navigate to="/login" />} />

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
