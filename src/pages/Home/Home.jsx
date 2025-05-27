import styles from './Home.module.css'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useNavigate, Link } from 'react-router-dom'
import PostDetail from '../../components/PostDetail'
import { useState } from 'react'

const Home = () => {

    const {documents: posts, loading} = useFetchDocuments("posts")
    const navigate = useNavigate()
    const [query, setQuery] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(query) {
            return navigate(`/search?q=${query}`)
        }
    }

    return (
        <>
            <div className={styles.home}>
                <div className={styles.search}>
                    <h1>Buscas por Tags</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input 
                            type="text"
                            placeholder="pesquisar por Tags"
                            onChange={(e) => setQuery(e.target.value)}
                            />
                            <button>Pesquisar</button>
                        </div>
                    </form>
                </div>
                <div>
                    {loading && <p>Carregando...</p>}
                    {posts && posts.length === 0 && (
                        <div className={styles.noposts}>
                            <p>Não foram encontrados nenhum post</p>
                            <Link to="/posts/create" className="btn">
                                Criar Primeiro Post
                            </Link>
                        </div>
                    )}
                    {posts && posts.length > 0 && (
                        <>
                            <h1>Posts Recentes</h1>
                            {posts && posts.map((post) => 
                            <PostDetail key={post.id} post={post} />)}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Home