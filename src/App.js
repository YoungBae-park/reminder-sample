import './App.css';
import React , {useState}from 'react';
import axios from 'axios';



const App = () => {

  const [output, setOutput] = useState();
const url = "https://script.google.com/macros/s/AKfycbxw77px99lbkA34tFe2HHwDLAyGbAQF9BiElKFk-K8ZadFEKwtptVDIwL6HiwbGPceN/exec"

const data = {
    title: 'test',
  };





  async function getValue (){
  
    await axios.post(url,data, {
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          allowRedirects: false 
          }
        }).then(res => {
        console.log('res : ' )
         setOutput(res.data);
       
      }).catch(err => {
        console.log(err)
      });

  }
  

function onclick () {
  getValue();
}

return (
      <div>
        <button onClick={onclick}>결과 확인</button> 
        <div>출력값 : {output}</div>
      </div>
  );


}

export default App;