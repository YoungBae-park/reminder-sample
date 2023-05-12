import './App.css';
// import gapi from 'googleapis';
//import React, {useState} from 'react';
//import 'semantic-ui-css/semantic.min.css'
//import { Button, Form, Container, Header } from 'semantic-ui-react'
//import file from './date.txt';
import axios from 'axios';


// 처음에는 현재날짜를 표시하는 기능을 만든다.
// 날짜를 표현하는 텍스트 , 버튼을 클릭시 클릭시점의 날짜와 시간표시



const App = () => {


/*   const data = {
    //key : "AIzaSyA9x7L8UieoJDD0R5TA7rMqlPwRMPgIlM0",
   //key : "AKfycbx2o79286xYQg2qxUolnmwLP2IxARu2eAVzozxBYjskwsCKZsmdRTD8M5dhhISLRgPl",
    title: 'React POST Request Example'
  } */

      // Simple POST request with a JSON body using fetch
/*     const requestOptions = {
        method: 'POST',
      //  headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'},
        //body: JSON.stringify(data)
    }; */

  /* const onClick = async () => {
  await axios("https://script.google.com/macros/s/AKfycbzPoYDfcSv2cDbQRc-A3tH3YmBA3OeDBhbvHOEzaAjPooRzS6N5GFzTdnopKoZpRqcD/exec",
   requestOptions
  ).then((response) => {
    console.log('응답시작');
      if(response.ok) {
        console.log('응답있어요')
        return response.json();
      }
      console.log('응답없어요')
      throw new Error('Network response was not ok.');
  }
  )
  .catch((error) => {
    console.log('응답에러')
    console.log(`error: ${error}`)
  }

  )
  } */


  const onClick = () => {
    axios({
      method : 'post',
      url : "https://script.google.com/macros/s/AKfycbzPoYDfcSv2cDbQRc-A3tH3YmBA3OeDBhbvHOEzaAjPooRzS6N5GFzTdnopKoZpRqcD/exec",
      data : {a:11, b:22}
    })
    .then(function (response) {
      // response  
 }).catch(function (error) {
     // 오류발생시 실행
     console.log('오류발생했습니다.')
 }).then(function() {
     // 항상 실행
 });
  }
  

return (
      <div>
        <button onClick={onClick}>결과 확인</button> 
        <div></div>
      </div>
  );

}

export default App;