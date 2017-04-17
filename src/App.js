import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home';
import About from './routes/About';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="app">
            <Header />

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
