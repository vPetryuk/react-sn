import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
  
    return (
        <div>
            
            {props.profile.name}
            <div className={s.descriptionBlock}>
              <img src={props.profile.photos.bigphoto}/>
            </div>
        </div>
    )
}

export default ProfileInfo;