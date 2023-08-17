import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './store/reducers/Counter';
import './App.css';
import { AppState, AppDispatch } from './store/index';

function App() {
  const counter = useSelector((state: AppState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="App">
      <h1>Redux Toolkit with Vite.js</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
