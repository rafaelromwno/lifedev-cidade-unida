import React from 'react'
import styles from './PostDetail.module.css'

const PostDetail = ({ post }) => {
    return (
        <div className={styles.post_detail}>

            <img src={post.image} alt={post.title} />

            <h2>{post.title}</h2>

            <p className={styles.createdby}>Por: {post.createdBy}</p>

            <div className={styles.tags}>
                {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                        #{tag}
                    </span>
                ))}
            </div>

            <Link to={`/posts/${post.id}`} className="btn btn-outline">
                Ler Postagem
            </Link>
        </div>
    )
}

export default PostDetail