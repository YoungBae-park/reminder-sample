import './App.css';
//import Output from './Output'
import React from 'react';
// import gapi from 'googleapis';
//import React, {useState} from 'react';
//import 'semantic-ui-css/semantic.min.css'
//import { Button, Form, Container, Header } from 'semantic-ui-react'
//import file from './date.txt';
import axios from 'axios';

// 처음에는 현재날짜를 표시하는 기능을 만든다.
// 날짜를 표현하는 텍스트 , 버튼을 클릭시 클릭시점의 날짜와 시간표시



const App = () => {



 /*  const data = {
    //key : "AIzaSyA9x7L8UieoJDD0R5TA7rMqlPwRMPgIlM0",
   key : "AKfycbzPoYDfcSv2cDbQRc-A3tH3YmBA3OeDBhbvHOEzaAjPooRzS6N5GFzTdnopKoZpRqcD",
    title: 'React POST Request Example'
  } */

      // Simple POST request with a JSON body using fetch

//const data = new FormData();
const url = "https://script.google.com/macros/s/AKfycbzPoYDfcSv2cDbQRc-A3tH3YmBA3OeDBhbvHOEzaAjPooRzS6N5GFzTdnopKoZpRqcD/exec"
//data.append("title", "hello");
const data = {
    id: 'AKfycbzPoYDfcSv2cDbQRc-A3tH3YmBA3OeDBhbvHOEzaAjPooRzS6N5GFzTdnopKoZpRqcD',
    email: 'guriguriyang@gmail.com',
    title: 'test',
    body: {'hello':'world'},
    status: 'type' === 'DELETE' ? "delete" : "reserve"
  };
let getResponse;
    const requestOptions = {
        method: 'POST',
        headers: { 'Contents-Type': 'text/plain;charset=utf-8'},
       body: JSON.stringify(data)
    };



  async function getValue (){
    try {
      let getResults = await axios.post(url+ "?action=update",data, {
            headers: {
              "Content-Type": "text/plain;charset=utf-8"
            }
          });
      console.log("getResults");
      console.log(getResults.headers);
    getResponse = await getResults.json();
    console.log("TryGetResponse")
    console.log(getResponse);
  } catch (e) {
    getResponse = {
      "result" : "200OK",
        "elapsedTime" : 0.0
  }
  console.log("catchGetResponse")
  console.log(getResponse)

}

 return (getResponse);
  }

  const onClick = async () => {
      const returnVal = getValue();
      console.log("리턴벨류");
      console.log(returnVal);
      console.log("리턴밸류 종료")
      console.log("리턴벨류 헤더 "+returnVal.headers)
     await fetch (returnVal.headers)
      .then(Response => {console.log(Response.headers.location)}).catch(console.log("캐치영역"))


  }
 
/*   const onClick = () => {

    axios.defaults.withCredentials = true;

    axios.post(`${url}`, {},
{
	withCredentials: true // 쿠키 cors 통신 설정
}).then(response => {
	console.log(response);
});
  } */
  

return (
      <div>
        <button onClick={onClick}>결과 확인</button> 
        <div>출력값 : {}</div>
      </div>
  );


}

export default App;