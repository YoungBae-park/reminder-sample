import './App.css';
import React , {useState, useEffect} from 'react';
import axios from 'axios';
import List from './components/List';
import Template from './components/Template';
import Insert from './components/Insert';




const App = () => {
  console.log('App 함수 도입부분');
  const url = "https://script.google.com/macros/s/AKfycbygey9yu0fTzDGTjMtPk1XuLgmPJ7XysoQWkCBuWiuNpFvZxUJePWc2bx85dIzL0roM/exec"
 
 console.log('remain type 도입부 : '+typeof(remain));

 
  const [items, setItems] = useState();


/* const data = {
    reqType: 'execution',
  };
 */


  
/*   const data2 = {
    reqType :'saveNow'
    }; */

// post 요청
/*   async function getValue (){
  
    await axios.post(url,data, {
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          allowRedirects: false 
          }
        }).then(res => {
         setBeforeDateTime(res.data) ;
          setTime();
  
      }).catch(err => {
        console.log(err)
      });

  } */
  
  async function getValue (){

  console.log('getValue 함수 실행 시작부분')
    await axios.post(url,{reqType: 'execution'},{
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
            allowRedirects: false 
    }}).then(res => {
      console.log('요청이 성공적입니다.')
         console.log(res.data[1]) ;
      // eslint-disable-next-line array-callback-return
      res.data.map(item => {
        //////////////////    item  시작  //////////
        const now = new Date();
        const deffer = now - Date.parse(item.last_time);
        console.log('조건문 검증(item.period) : '+item.period*1000*3600*24)
        console.log('조건문 검증(deffer) : '+deffer);
        console.log('type(item.period) : '+typeof(item.period*1000*3600*24))
        console.log('type(deffer) : '+typeof(deffer));
        if ((item.period*1000*3600*24-deffer) < 0) { 
          console.log('if문에 들어왔습니다.')
          item.remain = 0;
        }else{
          console.log('else에 들어왔습니다.item.period*1000*3600*24-deffer 의 type은?? '+typeof(item.period*1000*3600*24-deffer))
          item.remain = item.period*1000*3600*24-deffer;
          // setRemain(item.period*1000*3600*24-deffer);
        }
      
        const day = deffer/(1000*3600*24);
        const hour = ((deffer%(1000*3600*24))/(1000*3600));
        const minute = ((deffer%(1000*3600*24))%(1000*3600))/(1000*60);
        const second = ((deffer%(1000*3600*24))%(1000*3600))%(1000*60)/1000;

        const remain_day = item.remain/(1000*3600*24);
        const remain_hour = ((item.remain%(1000*3600*24))/(1000*3600));
        const remain_minute = ((item.remain%(1000*3600*24))%(1000*3600))/(1000*60);
        const remain_second = ((item.remain%(1000*3600*24))%(1000*3600))%(1000*60)/1000;
        
            item.intervalTimeText = Math.floor(day)+'일 '+Math.floor(hour)+'시 '+Math.floor(minute)+'분'+Math.floor(second)+'초' ;
            item.remainDateTime = Math.floor(remain_day)+'일 '+Math.floor(remain_hour)+'시 '+Math.floor(remain_minute)+'분'+Math.floor(remain_second)+'초' ;

            //////////////////    item  끝  //////////
    })

       setItems(res.data);
  
      }).catch(err => {
        console.log(err)
      });
    }



      // 페이지 바로 동작
      useEffect(() => {
        getValue();
      },[])


/* function setTime () {
  let now = new Date();
  const deffer = now - Date.parse(beforeDateTime);
  const day = deffer/(1000*3600*24);
  const hour = ((deffer%(1000*3600*24))/(1000*3600));
  const minute = ((deffer%(1000*3600*24))%(1000*3600))/(1000*60);
  const second = ((deffer%(1000*3600*24))%(1000*3600))%(1000*60)/1000;
  setIntervalTimeText(Math.floor(day)+'일 '+Math.floor(hour)+'시 '+Math.floor(minute)+'분'+Math.floor(second)+'초') ;
} */




// 현재시간 저장 요청

/* async function onSave () {
  await axios.post(url,{reqType: 'saveNow'}, {
    headers: {
      "Content-Type" : "text/plain;charset=utf-8",
      allowRedirects: false
    }
  }).then(res=> {
  getValue();
  setTime();
 
  }).catch(err => {
    console.log(err);
  })
} */


async function onDeleteRow (id) {
  console.log('onDeleteRow 시작'+typeof(id))
  await axios.post(url,{reqType :'deleteRow', rowToDelete : id}, {
    headers: {
      "Content-Type" : "text/plain;charset=utf-8",
      allowRedirects: false 
    }
  }).then(res=> {
    setItems(res.data);
    console.log("행이 제거됐는지 확인하세요. 다음은 응답값입니다. >>>"+res.data);
  }).catch(err => {
    console.log('에러발생')
    console.log(err)
  });
}


async function onInsert (title, targetPeriod) {
  await axios.post(url,{reqType : 'addItem', titleToAdd : title, targetPeriodToAdd : targetPeriod}, {
    headers: {
      "Content-Type" : "text/plain;charset=utf-8",
      allowRedirects: false
    }
  }).then(res=> {
    setItems(res.data);
    console.log("행이 추가됐는지 확인하세요. 다음은 응답값입니다. >>>"+res.data);
  }).catch(err => {
    console.log('에러발생')
    console.log(err)
  });
  
}


async function onReset (id) {
  console.log('onReset 시작 '+ typeof(id)+ id)
  await axios.post(url,{reqType : 'resetItem', rowToReset : id},{
    headers: {
      "Content-Type" : "text/plain;charset=utf-8",
      allowRedirects: false 
    }
  }).then(res=> {
    setItems(res.data);
    console.log("행이 초기화됐는지 확인하세요. 다음은 응답값입니다. >>>"+res.data);
  }).catch(err => {
    console.log('에러발생')
    console.log(err)
  });
}

return (
  <Template>
    <Insert onInsert={onInsert}/>
    <hr/>
    <List  items={items} onDeleteRow={onDeleteRow} onReset={onReset}/>
  </Template>
  );

}

export default App;