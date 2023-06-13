import React from 'react';

const ListItem = ({item, onDeleteRow, onReset}) => {
    const {id, title, period, last_time, intervalTimeText, remainDateTime } = item;
/*     const [intervalTimeText,setIntervalTimeText] = useState();
    const [remainDateTime, setRemainDateTime] = useState(); 
    const [remain , setRemain] = useState(0);
    const [deffer, setDeffer] = useState(0);
*/

/* 
    console.log("period 의 값"+period);

    let now = new Date();
    setDeffer(now - Date.parse(last_time));

    if ((period*1000*3600*24-deffer) < 0) { 
        console.log('if문에 들어왔습니다.')
        setRemain(0);
    }else{
        setRemain(period*1000*3600*24-deffer);
    } */

   
    
/*         useEffect(() => {

        const day = deffer/(1000*3600*24);
        const hour = ((deffer%(1000*3600*24))/(1000*3600));
        const minute = ((deffer%(1000*3600*24))%(1000*3600))/(1000*60);
        const second = ((deffer%(1000*3600*24))%(1000*3600))%(1000*60)/1000;

        const remain_day = remain/(1000*3600*24);
        const remain_hour = ((remain%(1000*3600*24))/(1000*3600));
        const remain_minute = ((remain%(1000*3600*24))%(1000*3600))/(1000*60);
        const remain_second = ((remain%(1000*3600*24))%(1000*3600))%(1000*60)/1000;
        
            setIntervalTimeText(Math.floor(day)+'일 '+Math.floor(hour)+'시 '+Math.floor(minute)+'분'+Math.floor(second)+'초') ;
            setRemainDateTime(Math.floor(remain_day)+'일 '+Math.floor(remain_hour)+'시 '+Math.floor(remain_minute)+'분'+Math.floor(remain_second)+'초') ;
    
        }, [deffer, remain]) */

      
    


    return (
        <div className="TodoListItem">
            
                <div className="text">{title}&#40;주기:{period}&#41; 저장시각 : {last_time} </div>
                <div>경과시간:{intervalTimeText} </div>
                <div>남은시간:{remainDateTime}</div>
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
