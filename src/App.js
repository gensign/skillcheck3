import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import routes from './routes'
import { withRouter } from 'react-router-dom'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      {
       props.location.pathname === "/" ? (
          <div>
            {routes} </div>) : (
            <div>
              <Nav />
            </div>
          )
      }
    </div>
  );
}

export default withRouter(App);
