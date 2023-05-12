import './App.css';
import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Container, Header } from 'semantic-ui-react'
//import file from './date.txt';
//import axios from 'axios';


// 처음에는 현재날짜를 표시하는 기능을 만든다.
// 날짜를 표현하는 텍스트 , 버튼을 클릭시 클릭시점의 날짜와 시간표시



const App = () => {

const [state, setState] = useState({
  name: '',
  age:'',
  salary: '',
  hobby: ''
});

const changeHandler = e => {
  const nextState = {[e.target.name] : e.target.value}
  setState({...state, ...nextState})
  //setState(...state.nextState)
  console.log(state)
};



const submitHandler = e => {
  e.preventDefault();
  console.log(state);
}

  return (
    <Container fluid className="container">
        <Header as='h2'>React Google Sheets!</Header>
        <Form className="form" onSubmit={submitHandler}>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Enter your name' type="text" name = "name" value = {state.name} onChange={changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input placeholder='Enter your age' type="number" name = "age" value = {state.age} onChange={changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Salary</label>
            <input placeholder='Enter your salary' type="number" name = "salary" value = {state.salary} onChange={changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Hobby</label>
            <input placeholder='Enter your hobby' type="text" name = "hobby" value = {state.hobby} onChange={changeHandler}/>
          </Form.Field>
          
          <Button color="blue" type='submit' >Submit</Button>
        </Form>
      </Container>
  );

 


}

export default App;





//--------------------------------------
/* return (
  <div className="App">
    <div>
      {data.map((row) => {
        return (<div>아이디: {row[languageList[0]]}</div>)
      })}
    </div>
    {standardTime}
    <button onClick={onReset} >리셋</button>
  </div>
); */