import React from 'react';
import sl from './ServiceList.module.css';
const styleCreator = (percent) =>{
    if(percent>75){
        return {
            width: `${percent}%`,
            height: '100%',
            position: 'absolute',
            backgroundColor: 'yellowgreen',
            top: 0,
            zIndex: '-1',
            borderRadius: '0px 5px 5px 0px'
        }
    }
    else if(percent>40){
        return {
            width: `${percent}%`,
            height: '100%',
            position: 'absolute',
            backgroundColor: 'orange',
            top: 0,
            zIndex: '-1',
            borderRadius: '0px 5px 5px 0px'
        }
    }
    else {
        return {
            width: `${percent}%`,
            height: '100%',
            position: 'absolute',
            backgroundColor: 'skyblue',
            top: 0,
            zIndex: '-1',
            borderRadius: '0px 5px 5px 0px'
        }
    }
}
export const ServiceList = (props) => {
    let general_quantity = 0;
    for(let i=0;i<props.services.length;i++){
        if(props.services[i].quantity){
            general_quantity+=props.services[i].quantity;
        }
    }
    return <div className={sl.serviceList}>
        <div>
            <div>

            </div>
            <div style={{fontWeight: 'normal'}}>
                Услуг
            </div>
        </div>
        <hr/>
        {
            props.services.map(el => <div>
                <div><p>{el.name}</p>
                    <div style={styleCreator(Math.round(+(el.quantity)/general_quantity*100))}></div>
                </div>
                <div>{el.quantity}</div>
            </div>)
        }
        <hr/>
        <div>
            <div style={{fontWeight: 'bold'}}>Всего</div>
            <div>15</div>
        </div>
    </div>
};