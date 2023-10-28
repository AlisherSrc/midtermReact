import { useEffect, useState } from 'react';
import styles from './postCard.module.css';
import { Link } from 'react-router-dom';

const PostCard = (props) => {

    const {
        title,
        description,
        likes,
        id
    } = props;

    const [likesDynamic, setLikes] = useState(likes);

    return <>
        <div className={styles.card}>
            <Link to={`post/${id}`}>

                <h2>{title}</h2>
                <p>{description}</p>
            </Link>

            {/* {likesDef ? <div> */}
            <p>{likesDynamic}</p>
            <input type='button' value="Like" onClick={() => setLikes(likesDynamic + 1)} />
            {/* </div> : null} */}
        </div>
    </>

}

export default PostCard;