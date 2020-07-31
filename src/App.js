import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Chainz from './components/Chainz';
import Watchz from './components/Watchz';
import Pendantz from './components/Pendantz';
import Cart from './components/Cart';
// import { Provider } from 'react-redux';
// import store from './store';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';

function App() {
  return (
    // <Provider store={store}>
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chainz" component={Chainz} />
            <Route exact path="/watchz" component={Watchz} />
            <Route exact path="/pendantz" component={Pendantz} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </Router>
      </div>
    // </Provider>
  );
}

export default App;
