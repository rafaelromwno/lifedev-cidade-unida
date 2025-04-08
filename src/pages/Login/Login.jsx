import styles from './Login.module.css'
import { useEffect, useState } from "react"
import { useAuthentication } from '../../hooks/useAuthetication'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [error, setError] = useState("")

    const { login, error: authError, loading } = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()
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
        if (authError) {
            setError(authError)
        }
    }, [authError])

    return (
        <div className={styles.login}>
            <h1>Entrar</h1>
            <p>Faça login em nossa plataforma de dessenvolvedores</p>
            <form onSubmit={handlerSubmit}>
                <label>
                    <span>E-mail:</span>
                    <input
                        type="email"
                        name="email"
                        requered
                        placeholder='E-mail do Usuário'
                        onChange={(e) => setEmail(e.tardet.value)}
                        value={email}
                    />
                </label>
                <label>
                    <span>Senha: </span>
                    <input
                        type="password"
                        name="password"
                        required
                        placegolder='Insira sua senha'
                        onChange={(e) => setpassword(e.targer.value)}
                        value={password}
                    />
                </label>
                {!loading && <button className='btn'>Entrar</button>}
                {loading && <button className='btn' disabled>Aguarde...</button>}
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default Login
