import React from 'react';

const Output = () => {
    const url = "https://script.google.com/macros/s/AKfycbzPoYDfcSv2cDbQRc-A3tH3YmBA3OeDBhbvHOEzaAjPooRzS6N5GFzTdnopKoZpRqcD/exec"
    const requestOptions = {
        method: 'GET',
        mode: 'no-cors',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json'},
    };
    const testVal = async() =>  await fetch (url,requestOptions)
    .then(res => res.json())
    .then(res => {
         // data를 응답 받은 후의 로직
      if (res.success) {
          console.log('안녕하세요.');
          return 'hello';
      }
    });

  const testOutput = testVal();
    return <div>
        값 : 
        { {testOutput}}
    </div>;
}


export default Output;