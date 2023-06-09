import React, {useEffect, useState} from 'react';

const ListItem = ({item, onDeleteRow, onReset}) => {
    const {id, title, period, last_time } = item;
    const [intervalTimeText,setIntervalTimeText] = useState();
    //const [beforeDateTime, setBeforeDateTime] = useState();

    let now = new Date();
    const deffer = now - Date.parse(last_time);
    const day = deffer/(1000*3600*24);
    const hour = ((deffer%(1000*3600*24))/(1000*3600));
    const minute = ((deffer%(1000*3600*24))%(1000*3600))/(1000*60);
    const second = ((deffer%(1000*3600*24))%(1000*3600))%(1000*60)/1000;


    useEffect(() => {

    

        setIntervalTimeText(Math.floor(day)+'일 '+Math.floor(hour)+'시 '+Math.floor(minute)+'분'+Math.floor(second)+'초') ;

    },[]);


    return (
        <div className="TodoListItem">
            <div className="checkbox">
                <div className="text">{title}&#40;주기:{period}&#41; 경과시간:{intervalTimeText}</div>
            </div>
            <button onClick={() => onDeleteRow(id)}>
                제거
            </button>
            <button onClick={() => onReset(id)}>
                초기화
            </button>
        </div>
    )
}

export default ListItem;
