import styles from './Login.module.css'
import { useEffect, useState } from 'react'
import {useAuthetication} from '../../hooks/useAuthetication'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    
    const {login, error:authError, loading} = useAuthetication()
    
    const handlerSubmit = async(e) => {
        e.preventDeFault()

        setError("")
        const user = {
            email,
            password,
        }

        const res = await login(user)

        console.log(res)
    }

    useEffect(() => {
        console.log(authError)
        if(authError) {
            setError(authError)
        }
    }, (authError))

  return (
    <div className={style.login}>
        <h2>Entrar</h2>
        <p>Faça login em nossa plataforma de desenvolvimento</p>
        <form onSubmit={handlerSubmit}>
            <label>
                <span>E-mail</span>
                <input type="email"
                 name='email'
                 required
                 placeholder='E-mail do Usuário' 
                 onChange={(e) => setEmail()(e.target.value)}
                 value={email} 
                 />
                </label>

                <label>
                    <span>Senha</span>
                    <input type="password" 
                    name='Password' 
                    required 
                    placeholder='Insira sua Senha' 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                    />
                 </label>

                 {!loading && <button className='bnt'>Entrar</button>}
                 {loading && (
                    <button className='bnt' disabled>
                        Aguarde...
                    </button>
                 )}
                 {error && <p>{error}</p>}
        </form>
    </div>
  )
}

export default Login