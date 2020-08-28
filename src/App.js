import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';


import Footer from './components/Footer';
import Navbar from './components/Navbar';
import JobListing from './components/JobListing';
import JobDetail from './components/JobDetail';
import Header from './components/Header';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
            <Navbar />
            <Header />
            <Route exact path="/" component={JobListing} />
            <Route exact path='/job/' component ={JobDetail} />
            <Footer />
        </div>
    </Router>
    </Provider>
  );
}

// for the jobdetials to show for each specific job, add :id to the link to the jobdetails page
export default App;
