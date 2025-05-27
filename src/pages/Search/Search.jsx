import styles from './Search.module.css'
import {useFetchDocuments} from '../../hooks/useFetchDocuments'
import {useQuery} from '../../hooks/useQuery'
import PostDetail  from '../../components/PostDetail'
import {Link} from 'react-router-dom'

const Search = () => {
    
    const query = useQuery()
    const search = query.get("q")
    const {document: posts} = useFetchDocuments("posts", search)

    return (
        <>
            <div>
                <h1>Resultados encontrados para: {search}</h1>
                {posts && posts.length === 0 && (
                    <p>Não encontramos nenhum post a partir dessa tag</p>
                )}
            </div>
            <div>
                {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
            </div>
        </>
    )
}

export default Search;