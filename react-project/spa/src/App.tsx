import React from 'react';
import './App.css';
import { RootRouter } from './RootRouter';
import { Link, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <RootRouter />
        <Link to="/">Home</Link>
        <br />
        <Link to="/sample01">Page1</Link>
        <br />
        <Link to="/sample02">Page2</Link>
      </Router>
    </div>
  );
}

export default App;
