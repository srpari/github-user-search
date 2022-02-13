import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Users from './components/Search/Users';
import User from './components/Search/User';

import SearchState from './context/SearchState';

function App() {
  return (
    <SearchState>
      <Router>
        <div className="App">
          <Navbar title="Github" icon="fab fa-github" />
          <div className="container">
            {/* <h1>Search GitHub Users/Org</h1> */}

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/search/:id" component={Users} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </SearchState>
  );
}

export default App;
