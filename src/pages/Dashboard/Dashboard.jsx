import styles from './Dashboard.module.css'
import React from 'react'
import {Link} from 'react-router-dom'
import {useAuthValue} from '../../context/AuthContext'
import {useFetchDocuments} from '../../hooks/useFetchDocuments'
import {useDeleteDocument} from '../../hooks/useDeleteDocument'

const Dashboard = () => {
  
  const {user} = useAuthValue()
  const uid = user.uid
  const {document: posts} = useFetchDocuments("posts", null, uid)
  const {deletDocument} = useDeleteDocument("posts")

  console.log(uid)
  console.log(posts)
  
  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie seus Posts</p>
      {posts && posts.length === 0 ? (
        <div>
          <p>Não foi encontrado nenhum Post</p>
          <Link to="/posts/create" className='btn'>
            Crie seu Primeiro Posts!!!
          </Link>
        </div>
      ) : (
        <div>
          <span>Título</span>
          <span>Ações</span>
        </div>
      )}

      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <p>{post.title}</p>
            <div>
              <Link to={`/posts/${post.id}`} >
                Ver
              </Link>
              <Link to={`/posts/edit/${post.id}`}>
                Editar
              </Link>
              <button onChange={() => deletDocument(post.id)}>
                Excluir
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Dashboard