import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';

function App() {
  return (
    <div className="App">

      <Router>

        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
