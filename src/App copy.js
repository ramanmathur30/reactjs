import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef,useMemo, useCallback, useContext, useDebugValue,useLayoutEffect,useImperativeHandle,useInsertionEffect,useSyncExternalStore,useReducer } from "react";
import userEvent from '@testing-library/user-event';
import Todos from "./todos";


function App() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  
  const count =useRef(0);
  const getName = useRef("");
  const getGender = useRef("");
  const getEvent = useRef("");

  useEffect(() => {
    count.current = count.current + 1;
  });

  const onClickGetTextData=()=>{
    console.log("getName.current.name --->>",getName.current.value);
    console.log("getGender.current.name --->>",getGender.current.value);
    console.log("getEvent.current.name --->>",getEvent.current.value);
    // getTextData.current.value="Hey! I am here.";
    // getTextData.current.focus();
  }

  const [number, setNumber] = useState(0)
  // Using useMemo
  const squaredNum = useMemo(()=> {
    return squareNum(number);
  }, [number])
  //const squaredNum =squareNum(number);

  const [counter, setCounter] = useState(0);
  
 // Change the state to the input
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  }
    
  // Increases the counter by 1
  const counterHander = () => {
    setCounter(counter + 1);
  }

  useEffect(()=>{
    console.log("-----Update------");
  })

  // useEffect
  // useMemo
  // useRef
  // useState
  // useCallback
  // useContext
  // useDebugValue

//////useCallback////////
  const [countcall, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(countcall + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, `new Entry`]);
  }, [todos]);

  // const addTodo = () => {
  //   setTodos((prev) => [...prev, `new Entry`]);
  // };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     
      <input value={inputValue1} name="uname" ref={getName} onChange={(e)=>setInputValue1(e.target.value)} placeholder="Name" />
      <input value={inputValue2} name="gender" ref={getGender} onChange={(e)=>setInputValue2(e.target.value)} placeholder="Gender" />
      <input value={inputValue3} name="event" ref={getEvent} onChange={(e)=>setInputValue3(e.target.value)} placeholder="Event" />
      {/* <input value={inputValue4} ref={getTextData} onChange={(e)=>setInputValue4(e.target.value)} placeholder="Work" /> */}
      <h1>Render Count: {count.current}</h1>
      <button onClick={onClickGetTextData}>Check Now</button>

      <h1>useMemo</h1>
      <input type="number" placeholder="Enter a number"
          value={number} onChange={onChangeHandler}>
      </input>
        
      <div>OUTPUT: {squaredNum}</div>
      <button onClick= {counterHander}>Counter ++</button>
      <div>Counter : {counter}</div>

      <h1>------useCallback----</h1>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {countcall}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

// function to square the value
function squareNum(number){
  console.log("Squaring will be done!");
  return Math.pow(number, 2);
}

export default App;
