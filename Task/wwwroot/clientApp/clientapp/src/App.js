import './App.css';
import 'devextreme/dist/css/dx.light.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import Slide1 from './screens/Slide1';
import Slide2 from './screens/Slide2';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render(){
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Slide1</Link>
            </li>
            <li>
              <Link to="/slide2">Slide2</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/slide1" element={<Slide1/>} />
          <Route path="/slide2" element={<Slide2/>} />
          <Route path="/" element={<Slide1/>} />
        </Routes>
      </div>
    </Router>
    );
  }
}



export default App;
