//import logo from './logo.svg';

import './App.css';
import Sample from './components/Sample';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'
import Register from './components/register/Register';

function App() {
  return (
    <div className="App">
    <Router>

    <Switch>
          
          <Route exact path="/">
            <Sample/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
        </Switch>
    </Router>

    </div>
  );
}

export default App;
