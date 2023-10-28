import styles from './post.module.css';
import { useParams } from 'react-router-dom';
import posts from '../../database/posts';
import { useEffect, useState } from 'react';


const Post = () => {
    const [post,setPost] = useState();

    const [editMode,setEditMode] = useState(false);

    const { id } = useParams();

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [likes,setLikes] = useState('');

    useEffect(() => {
        setPost(posts.filter((currpost) => currpost.id == id)); 

        setTitle(posts[0].title);
        setDescription(posts[0].description);
        setLikes(posts[0].likes);
    },[])

    // setPost(posts.filter((post) => post.id === id));

    return <>
        
        {post && !editMode ? <div className={styles.post}>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{likes}</p>
        </div> : null}

        {post && editMode ? <div className={styles.post}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/> 
        </div> : null}

        <input type='button' value={editMode ? "Save" : "Edit"} onClick={() => setEditMode(!editMode)}/>
    </>

}

export default Post;