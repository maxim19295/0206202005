import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {RequestPanel} from "./RequestPanel/RequestPanel";
import {ServiceList} from "./ServiceList/ServiceList";
export const Profile = () =>(
    <div>
        <ProfileInfo/>
        <ServiceList/>
        <RequestPanel/>
    </div>)