import { Route, Switch } from 'react-router';
import './App.css';

import { Todos } from './components/todo/Todos';
import { Users } from './components/user/Users';

function App() {
  return (
    <div className='App'>
      <h1>Todo App</h1>
      <Switch>
        <Route path='/' exact={true}>
          <Users />
        </Route>
        <Route path='/todos/:userid'>
          <Todos />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
