import styles from './Post.module.css'
import {Link, useParams, useNavigate} from 'react-router-dom'
import {useFetchDocument} from '../../hooks/useFetchDocument'



const Post = () => {

    const {id} = useParams()
    const {document: post} = useFetchDocument("post", id)

    return (
        <div>
            <h1>{post.title}</h1>
            <img src={post.image} alt={post.image} />
            <p>{post.body}</p>
            {post.tags?.map((tag) => (
                <p>#{tag}</p>
            ))}
        </div>
    )
}

export default Post;