import React, {useContext} from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {RequestPanel} from "./RequestPanel/RequestPanel";
import {ServiceList} from "./ServiceList/ServiceList";
import {userContext} from "../../context/userContext";
export const Profile = () =>{
    const users = useContext(userContext);
    const exampleId = 1;
    const currentUser = users.find((el)=>el.id===exampleId);
    console.log(currentUser)
    if(currentUser){
        return <div>
            <div className='content'>
                <ProfileInfo name={currentUser.name} surname={currentUser.surname} photo={currentUser.photo} specialization={currentUser.specialization} about={currentUser.about}/>
                <ServiceList services={[...currentUser.services]}/>
            </div>
            <RequestPanel id={currentUser.id}/>
        </div>
    }
    else return null;
}