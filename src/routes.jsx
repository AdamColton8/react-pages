import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import App from './app';
import About from './components/About';
import Sample from './components/Sample';
import Slider from './components/Slider';
import Instruction from './components/Instruction';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/slider" component={Slider}/>
      <Route path="/instruction" component={Instruction}/>
      <Route path="/about" component={About}/>
      <Route path="/sample" component={Sample}/>
    </div>
  </Router>
);

export default Routes;
