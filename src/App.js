import './App.css';
import React, {useState} from 'react';

// 처음에는 현재날짜를 표시하는 기능을 만든다.
// 날짜를 표현하는 텍스트 , 버튼을 클릭시 클릭시점의 날짜와 시간표시



const App = () => {




  const [standardTime, setStandardTime] = useState('');
  
  const today = new Date();
  console.log(today);



  const onReset = () => {
     setStandardTime('소중이마지막물갈이시각 : '+today.toDateString()+"/"+today.toTimeString());
     console.log('re : '+standardTime);
  }

  return (
    <div className="App">
      {standardTime}
      <button onClick={onReset} >리셋</button>
    </div>
  );
}

export default App;