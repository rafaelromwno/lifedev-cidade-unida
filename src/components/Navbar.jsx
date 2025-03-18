import React from 'react'
import  { useState } from 'react'
import styles from './Navbar.module.css'
 
 
const Navbar = () => {
    const [user, setUser] = useState({name:'Victor', idade: 42})
    return (
        <>
            <nav className='styles.navbar'>
                <p>{user.name}</p>
                <p>{user.idade}</p>
                <button onClick={() => setUser((prevUser) => ({...prevUser, idade: prevUser.idade + 1}))}>Aumente a idade</button>
               
 
            </nav>
        </>
 
 
    )
}
 
export default Navbar