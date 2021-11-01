import React from 'react';
import './App.scss';
import { Button } from './components/Buttons/Button';
import { DropDown } from './components/DropDown/DropDown';

function App() {
  //for demonstration
  const click = () => {
    return alert("callback")
  }

  const dataDrop = ["123", "124", "125", "126", "127"]

  return (
    <div className="App">
        <Button
              callback={click}
              >CLICK
        </Button>
        <DropDown
              data={dataDrop}
              >DropDown
        </DropDown>
    </div>
  );
}

export default App;
