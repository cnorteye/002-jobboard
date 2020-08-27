import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import JobListing from './components/JobListing';
import Header from './components/Header';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Filter />
      <JobListing />
      <Footer />

    </div>
  );
}

export default App;
