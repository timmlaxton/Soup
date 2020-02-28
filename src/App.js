import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Layout from './components/Layout';
import Navbar from './components/NavigationBar';
import NavigationBar from './components/NavigationBar';

class App extends Component {
  render() {
  return (
   <React.Fragment>
     <NavigationBar/>
     <Layout>
<Router>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    </Switch>
    </Router>
    </Layout>
    </React.Fragment>
    );
  }
}

export default App;
