import React from 'react';
import './App.scss';
import { Button } from './components/Buttons/Button';

function App() {
  //for demonstration
  const click = () => {
    return alert("callback")
  }

  return (
    <div className="App">
        <Button
              type="primary"
              callback={click}
              loading
              >CLICK
        </Button>
        <Button
              type="danger"
              callback={click}
              loading
              >CLICK
        </Button>
        <Button
              type="success"
              callback={click}
              loading
              disabled
              >CLICK
        </Button>
        <Button
              type="warning"
              callback={click}
              loading
              large
              outlined
              text
              >CLICK
        </Button>
    </div>
  );
}

export default App;
