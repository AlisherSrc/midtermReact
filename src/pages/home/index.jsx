import { useEffect, useMemo, useState } from 'react';
import styles from './home.module.css';

import defPosts from '../../database/posts';
import PostCard from '../../components/postCard';


const Home = () => {
    const [posts, setPosts] = useState(defPosts
    );

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    // setPosts(defPosts);

    useEffect(() => {
        setPosts(posts);      
        
    }, [posts])

    const createPost = () =>{
        setPosts([...posts,{
            id: posts[posts.length - 1].id + 1,
            title: title,
            description:description,
            likes: 0
        }])
    }

    const search = (text) => {
        setPosts(posts.filter((post) => {
            return post.title.includes(text)
        }))
    }


    return <>
        <div>
            <h1>Create a post!</h1>
            <input placeholder='title' onChange={(e) => setTitle(e.target.value)}/>
            <input placeholder='description' onChange={(e) => setDescription(e.target.value)}/>
            <button onClick={createPost}>Create</button>
        </div>
        <div>
            <h2>Search post</h2>
            <input type='text' placeholder='Search...' onChange={(e) => search(e.target.value)} />
        </div>
        <div className={styles.posts}>
            {posts.map((post) => (
                // <p key={post.id}>post</p>
                <PostCard key={post.id} title={post.title} description={post.description} likes={post.likes} id={post.id} />
            ))}
        </div>
    </>

}

export default Home;