import React from 'react';
import './App.scss';
import { Button } from './components/Buttons/Button';
import { DropDown } from './components/DropDown/DropDown';

function App() {
  //for demonstration
  const click = () => {
    return alert("callback")
  }

  const icon = "https://cdn.iconscout.com/icon/free/png-128/redux-2749334-2284724.png"

  const dataDrop = ["123", "124", "125", "126", "127"]

  return (
    <div className="App">
        <Button
              callback={click}
              >CLICK {icon}
        </Button>
        <Button
              loading
              block
              callback={click}
              >CLICK {icon}
        </Button>
        <DropDown
              data={dataDrop}
              >DROPDOWN
        </DropDown>
    </div>
  );
}

export default App;
