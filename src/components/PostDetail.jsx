import { Link } from "react-router-dom"
import styles from "./PostDetail.module.css"

const PostDetail = ({ post }) => {

    const dataFormatada = post.createAt?.toDate?.().toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    }) || "Data não disponível"

    return (
        <>
            <div className={styles.post_detail}>
                <img src={post.image} alt={post.title} />
                <h2>{post.title}</h2>
                <p className={styles.createby}>por: {post.createBy}</p>
                <div className={styles.tags}>
                    {post.tags.map((tag) => (
                        <p key={tag}>
                            <span>#</span>
                            {tag}
                        </p>
                    ))}
                </div>
                <p className={styles.createby}>data: {dataFormatada}</p>
                <Link to={`/posts/${post.id}`} className="btn btn-outline">
                    Ler Postagem!
                </Link>
            </div>
        </>
    )
}

export default PostDetail
