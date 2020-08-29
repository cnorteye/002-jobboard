import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
import ContentFilter from './components/ContentFilter'
import Detail from './components/Detail';


import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
            <Header />
            <Route exact path="/" component={ContentFilter} />
            <Route path='/job:id/' component ={Detail} />
            <Footer />
        </div>
    </Router>
    </Provider>
  );
}

// for the jobdetials to show for each specific job, add :id to the link to the jobdetails page
export default App;
