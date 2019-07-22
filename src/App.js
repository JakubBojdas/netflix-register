import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './pages/Register';
import Plan from './pages/Plan';
import Movies from './pages/Movies'
import Navigation from './components/sections/Navigation';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navigation /> */}
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route path="/register/plan" component={Plan} />
          <Route path="/register/movies" component={Movies} />

          {/* <Route path="/register/plan/cos" component={() => <h5>Cos</h5>} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
