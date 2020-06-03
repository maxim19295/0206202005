import React from "react";
import exampleImage from '../../../assets/example';
import p from './ProfileInfo.module.css';
export const ProfileInfo = () =>(
    <div className={p.content}>
        <div className={p.userImage}><img src={exampleImage} alt='example'/></div>
        <div className={p.baseInfo}>
            <div className={p.nameString}>Name Surname</div>
            <div className={p.status}>Status</div>
        </div>
        <div className={p.aboutService}>Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны</div>
    </div>);