
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Users from './user/pages/User';
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return (
    <Router>
      <Route path="/">
        <Users />
      </Route>
      <Route path="/places/new">
        <NewPlace />
      </Route>
    </Router>
  )
}

export default App;
