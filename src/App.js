import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <div>
        Test Link
        <div>
       
          <button>
          <Link to="/users">User Page</Link> 
          </button>
          <button>
          <Link to="/admins">Admin Page</Link> 
          </button>
        </div>
      </div>
 
    </div>
  )
}
export default App;

