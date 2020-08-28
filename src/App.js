import React from 'react';
import { Provider } from 'react-redux';


import Footer from './components/Footer';
import Navbar from './components/Navbar';
import JobListing from './components/JobListing';
import Header from './components/Header';
import Filter from './components/Filter';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Header />
      <Filter />
      <JobListing />
      <Footer />

    </Provider>
  );
}

export default App;
