import './App.css';
import React , {useState, useEffect} from 'react';
import axios from 'axios';
import List from './components/List'
import Template from './components/Template'
import Insert from './components/Insert'
//  import AddItem from './pages/AddItems';
// import Insert from './components/Insert';




const App = () => {
  console.log('App 함수 도입부분');
  const url = "https://script.google.com/macros/s/AKfycbygey9yu0fTzDGTjMtPk1XuLgmPJ7XysoQWkCBuWiuNpFvZxUJePWc2bx85dIzL0roM/exec"



 
  const [items, setItems] = useState();

 // const [timerId,setTimerId] = useState();


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
    await axios.post(url,{ reqType: 'execution'},{
          headers: {
              "Content-Type": "text/plain;charset=utf-8",
            allowRedirects: false 
    }}).then(res => {
      console.log('요청이 성공적입니다.')
         console.log(res.data[1]) ;
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

  <div> 
{/*         <div>직전 마지막 수행 시각 : {beforeDateTime}</div>
          <div>경과시간 : {intervalTimeText}</div>
            <button onClick={onSave}>초기화</button> 
        <hr/>
          <h3>&lt;입력란&gt;</h3><br/>
          <form>
            제목 : <input name='title' type = 'text' placeholder='제목을 입력 하세요.' value={title} onChange={onChangeTitle}/>
            주기 : <input name='targetPeriod' type = 'text' placeholder='주기를 숫자로 입력하세요' value={targetPeriod} onChange={onChangeTargetPeriod}/>
            <button type='submit'>생성</button>
          </form> */}



{



    <Template>
    <Insert onInsert={onInsert}/>
    <hr/>
    <List  items={items} onDeleteRow={onDeleteRow} onReset={onReset}/>
  </Template>

  



}

</div>




  );

}

export default App;