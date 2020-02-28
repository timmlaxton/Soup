import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
  return (
   <React.Fragment>
<Router>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={Home} />
    <Route path="/contact" component={Home} />
    <Route component={NoMatch} />
    </Switch>
    </Router>
    </React.Fragment>
    );
  }
}

export default App;
