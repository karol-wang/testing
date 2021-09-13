import './App.css';
import { useRef, useState } from 'react';
import { Button, debounce, useForkRef } from '@material-ui/core';
import Fibonacci from './func/Fibonacci';
import Debounce from './func/Debounce';
import Stack from './func/Stack';

function App() {
  const [getFibonacci, setFibonacci] = useState();
  const [count, setCount] = useState(0);
  const FibonacciRef = useRef();
  const MyStackRef = useRef();
  const myStack = new Stack();

  const increment = () => {
    setCount(count+1);
  }

  return (
    <div className="App">
      <div>
        1.實作 Fibonacci number (費式數列)
        <input type="number" ref={FibonacciRef} />
        <Button variant="contained" onClick={
            () => {setFibonacci(Fibonacci(FibonacciRef.current.value))}
          }
        >
          Get index of Fibonacci Series
        </Button>
        {getFibonacci}
      </div>
      <div>
        2.實作 Debounce
        <Button variant="contained" onClick={
            () => {increment()}
          }
        >
          Get index of Fibonacci Series
        </Button>
        {count}
      </div>
      <div>
        3.使用 Linked List 實作 Stack
        <input type="text" ref={MyStackRef} />
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
      <div>
        4.實作 getPagination
        <input type="number" />
        <Button variant="contained" onClick={
            () => {}
          }
        >
          Get index of Fibonacci Series
        </Button>
      </div>
        
    </div>
  );
}

export default App;
