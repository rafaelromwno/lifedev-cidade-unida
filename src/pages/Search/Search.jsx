import styles from "./Search.module.css"

import { userFetchDocuments } from "../../hooks/userFetchDocuments"
import { userQuery } from "../../hooks/userQuery"

import PostDetail from "../../components/PostDetail"
import { Link } from "react-router-dom"

const Search = () => {
    const query = userQuery()
    const search = query.get("q")

    const { documents: posts } = userFetchDocuments("posts", search)

    return (
        <div className={styles.search_container}>
            <h1>Resultados encontrados para: {search}</h1>
            <div className="post-list">
                {posts && posts.length === 0 && (
                    <>
                        <p>Não foram encontrados posts a partir da sua busca...</p>
                        <Link to="/" className="btn btn-dark">
                            Voltar
                        </Link>
                    </>
                )}
                {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
            </div>
        </div>
    )
}

export default Search
