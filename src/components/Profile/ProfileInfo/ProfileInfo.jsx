import React from "react";
import p from './ProfileInfo.module.css';
export const ProfileInfo = (props) =>(
    <div className={p.content}>
        <div className={p.userImage}><img src={props.photo} alt='example'/></div>
        <div className={p.baseInfo}>
            <div className={p.nameString}>{props.name} {props.surname}</div>
            <div className={p.status}>{props.specialization}</div>
        </div>
        <div className={p.aboutService}>{props.about}</div>
    </div>);