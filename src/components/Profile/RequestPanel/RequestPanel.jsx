import React, {useContext, useReducer, useState} from "react";
import rp from './RequestPanel.module.css';
import {Request} from "./Request/Request";
import {requestContext} from "../../../context/requestContext";
import {requestReducer} from "../../../reducers/requestReducer";
import {replaceDateInString} from "../../../replaceDateInString";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faCommentAlt } from '@fortawesome/free-solid-svg-icons'

export const RequestPanel = (props) => {
    const requests = useContext(requestContext);
    const exampleNameInSystem = 'Иван Иванов';
    const currentUserRequests = requests.find(el=>el.id===props.id);
    console.log(currentUserRequests);
    const [newText,updateNewText] = useState('');
    const [currentUserRequestsAsState,dispatch] = useReducer(requestReducer,currentUserRequests);
    const handleChange = (e) =>{
        updateNewText(e.target.value);
    }
    const handleKeyPress = (e) =>{
        if(newText){
            if (e.ctrlKey && e.charCode === 13) {
                dispatch({type: 'ADD', name: exampleNameInSystem, date: replaceDateInString(), text: newText});
                updateNewText('');
            }
        }
    }
    const handleClick = () =>{
            dispatch({type: 'ADD', name: exampleNameInSystem, date: replaceDateInString(), text: newText});
            updateNewText('');
    }
    return <div className={rp.requestPanel}>
        <div className='content'>
            <div className={rp.panelHeader}>
                <div>
                    <div className={rp.lastRequests}>Последние отзывы</div>
                    <div className={rp.allRequests}>Все отзывы</div>
                </div>
                <div className={rp.states}>
                    <div><span><FontAwesomeIcon icon={faHeart}/></span>{currentUserRequestsAsState.likes}</div>
                    <div><span><FontAwesomeIcon icon={faCommentAlt}/></span>{currentUserRequestsAsState.quantity}</div>
                </div>
            </div>
            {currentUserRequestsAsState.requestsList.map(el=><Request key={el.id} date={el.date} name={el.name} text={el.text}/>)}
        </div>
        <div className={rp.newRequest}>
            <div className='content'>
                <div><textarea onKeyPress={handleKeyPress} value={newText} onChange={handleChange}/></div>
                <div>
                    <button onClick={handleClick} disabled={newText ? false : true}>Написать консультанту</button>
                </div>
            </div>
        </div>
    </div>
};