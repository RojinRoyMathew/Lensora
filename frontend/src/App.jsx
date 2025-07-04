import './App.css'
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { CreateBlog } from './pages/CreateBlog'
import { Home } from './pages/Home'
import { Landing } from './pages/Landing'
import { Profile } from './pages/Profile'
import { ReadBlog } from './pages/ReadBlog'
import { Layout } from './components/Layout'
import { useEffect } from 'react'
import { CreateUser } from "./components/CreateUser";
import { Login } from "./components/Login";
import { ListTable } from "./components/ListTable";
import axios from 'axios'


function App() {
 useEffect(() => {
  let token = sessionStorage.getItem("User")
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
  } 
 }, [])

 return (
    <Router>
     <Routes>
       <Route path="/" element={<Landing/>}/>
       <Route path="/signup" element={<CreateUser />} />
       <Route path="/login" element={<Login />} />
       <Route element={<Layout/>}> 
        <Route path="/home" element={<Home/>}/>
        <Route path="/createblog" element={<CreateBlog/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/postview" element={<ListTable/>} />
        <Route path="/readblog/:id" element={<ReadBlog/>}/>
     </Route>
     </Routes>
    </Router>
  )
}

export default App
