import './App.css';
import { useRef } from 'react';
import { Button } from '@material-ui/core';
import Fibonacci from './func/Fibonacci';
import Stack from './func/Stack';
import getPagination from './func/Pagination';
import debounce from './func/Debounce';
import CustomHook from './components/customHook';

function App() {
  const FibonacciRef = useRef();
  const MyStackRef = useRef();
  const offsetRef = useRef();
  const limitRef = useRef();
  const totalRef = useRef();
  const myStack = new Stack();
  
  return (
    <div className="App">
      <div className="row">
        <p>實作 Fibonacci number (費式數列)</p>
        <input type="number" ref={FibonacciRef} placeholder="index" />
        <Button variant="contained" onClick={
            () => {alert(Fibonacci(FibonacciRef.current.value))}
          }
        >
          Get index of Fibonacci Series
        </Button>
      </div>
      <div className="row">
        <p>實作 Debounce(延遲1秒)</p>
        <Button variant="contained" onClick={
            () => { debounce() }
          }
        >
          Click Me
        </Button>
      </div>
      <div className="row">
        <p>使用 Linked List 實作 Stack</p>
        <input type="text" ref={MyStackRef} placeholder="push me" />
        <Button variant="contained" onClick={
            () => { myStack.push(MyStackRef.current.value) }
          }
        >
          push
        </Button>
        <Button variant="contained" onClick={
            () => { alert(myStack.pop()) }
          }
        >
          pop
        </Button>
        <Button variant="contained" onClick={
            () => { alert(myStack.size()) }
          }
        >
          size
        </Button>
      </div>
      <div className="row">
        <p>實作 getPagination</p>
        <input type="number" ref={offsetRef} placeholder="offset" />
        <input type="number" ref={limitRef} placeholder="limit" />
        <input type="number" ref={totalRef} placeholder="total" />
        <Button variant="contained" onClick={
            () => { 
              const Pagination = getPagination(offsetRef.current.value, limitRef.current.value, totalRef.current.value) ;
              alert(JSON.stringify(Pagination));
            }
          }
        >
          Get Pagination
        </Button>
      </div>
      <hr />
      <p>Custom Hook實作</p>
      <div className="customHook">
          <CustomHook />
      </div>
    </div>
  );
}

export default App;
