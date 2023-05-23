import './App.css';
import React , {useState}from 'react';
import axios from 'axios';



const App = () => {

  const [beforeDateTime, setBeforeDateTime] = useState();
  const [intervalTimeText,setIntervalTimeText] = useState();
const url = "https://script.google.com/macros/s/AKfycbygey9yu0fTzDGTjMtPk1XuLgmPJ7XysoQWkCBuWiuNpFvZxUJePWc2bx85dIzL0roM/exec"
//const url = "https://script.google.com/macros/s/AKfycbyt8mCKyL3Asnos11sQW2RW1pJ_19pS4Um3W4DNdt8/dev"

const data = {
    reqType: 'execution',
  };

/*   const data2 = {
    reqType :'saveNow'
    }; */


  async function getValue (){
  
    await axios.post(url,data, {
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          allowRedirects: false 
          }
        }).then(res => {
        console.log('res : '+res.data );
       // let beforeDateTime = res.data;
         //setBeforeDateTime(new Date(res.data));
         //const date = new Date();
         console.log("dataparse : "+Date.parse(res.data))
        // setBeforeDateTime(Date.parse(res.data));
         console.log("beforeDateTime : "+beforeDateTime);
         let now = new Date();
         console.log('현재시간 : '+now+typeof(now));
         const deffer = now - Date.parse(res.data);
        setBeforeDateTime(res.data) ;
         console.log('이전시간 : ' + beforeDateTime+ typeof(beforeDateTime));
         console.log('시간차이 : '+ deffer);
         const day = deffer/(1000*3600*24);
         const hour = ((deffer%(1000*36000*24))/(1000*3600));
         const minute = ((deffer%(1000*3600*24))%(1000*3600))/(1000*60);
         setIntervalTimeText('경과시간 : ' +Math.floor(day)+'일 '+Math.floor(hour)+'시 '+Math.floor(minute)+'분') ;
         console.log("'"+beforeDateTime+"'"+typeof(beforeDateTime))
         console.log(intervalTimeText+typeof(intervalTimeText));
       
      }).catch(err => {
        console.log(err)
      });

  }
  
  // 페이지 바로 동작
getValue();

// 현재시간 저장 요청
async function onSave () {
  await axios.post(url,{reqType: 'saveNow'}, {
    headers: {
      "Content-Type" : "text/plain;charset=utf-8",
      allowRedirects: false
    }
  }).then(res=> {
  console.log('저장요청이 완료되었습니다.')
  console.log(res);
  }).catch(err => {
    console.log(err);
  })
}

return (
      <div>

        <div>소중이 마지막 물갈이 시간 : {beforeDateTime}</div>
        <div>경과시간 : {intervalTimeText}</div>
        <button onClick={onSave}>물갈이를 완료했습니다.	&#40;현재를 저장합니다.	&#41;</button> 
      </div>
  );


}

export default App;