import './App.css';

import { Todos } from './components/Todos';
import { NewTodo } from './components/NewTodo';

function App() {
  return (
    <div className='App'>
      <h1>Todo App</h1>
      <NewTodo />
      <Todos />
    </div>
  );
}

export default App;
