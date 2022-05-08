import React from 'react';
import styles from './users.module.css';
import avatar from '../../assets/defaultavatar.png'
import preloader from '../../assets/loading.gif'
import { NavLink } from 'react-router-dom';
import Paginator from "../common/Paginator/Paginator";
const Users = (props) => {
debugger

return <div>
<div>
<Paginator props={props}/>
</div>

{ 
    props.users.map(u => <div key={u.id}>
        
        <span> 
          
            <NavLink to={'/profile/' + u.id}>
            <div>
               
               {u.photos !=null ? <img src={u.photos.bigphoto !=null ? u.photos.bigphoto : avatar} className={styles.userPhoto} alt=""/> : <img src={avatar} className={styles.userPhoto} alt=""/>} 
                    
            </div>
            </NavLink>
            <div>
                {u.followed
                    ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>}

            </div>
        </span>
        <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
               
            </span>
        </span>
    </div>)
}
</div>
}
export default Users;