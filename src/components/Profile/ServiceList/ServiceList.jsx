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
export const ServiceList = () =>(
    <div className={sl.serviceList}>
        <div>
            <div>

            </div>
            <div style={{fontWeight: 'normal'}}>
                Услуг
            </div>
        </div>
        <hr/>
        <div>
            <div><p>Ручное бронирование</p><div style={styleCreator(80)}></div></div>
            <div>11</div>
        </div>
        <div>
            <div><p>Пакетные туры</p><div style={styleCreator(30)}></div></div>
            <div>3</div>
        </div>
        <div>
            <div><p>Отели</p><div style={styleCreator(10)}></div></div>
            <div>1</div>
        </div>
        <hr/>
        <div>
            <div style={{fontWeight: 'bold'}}>Всего</div>
            <div>15</div>
        </div>
    </div>
);