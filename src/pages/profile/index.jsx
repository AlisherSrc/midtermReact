import { useState } from 'react';
import styles from './profile.module.css';
import profileImage from './../../assets/react.svg';

const Profile = () => {
    const [name, setName] = useState("Alisher");
    const [surname, setSurname] = useState("Seitkali");
    const [email, setEmail] = useState("alishror171@gmail.com");
    const [password, setPassword] = useState("Qwerty");


    const [editMode, setEditMode] = useState(false);

    return <>
        <div className={styles.profile}>
            <img className={styles.profilePic} src={profileImage} alt='profile pic' />

            <div className={styles.userInfo}>
                {!editMode ? <>
                    <h2>{name}</h2>
                    <h2>{surname}</h2>
                    <p>{email}</p>
                    <p>{password}</p>
                </> : <>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type='text' value={surname} onChange={(e) => setSurname(e.target.value)} />
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
                </>}
                <button onClick={() => setEditMode(!editMode)}>{editMode ? "Save" : "Edit"}</button>
            </div>
        </div>
    </>

}

export default Profile;