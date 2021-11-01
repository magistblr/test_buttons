import React, { useState } from 'react';
import { Button, ButtonType } from '../Buttons/Button';
import './DropDown.scss';

type DropDownType = {
  data: string[];
};

export const DropDown: React.FC<DropDownType & ButtonType> = ({ children, ...props }) => {
  const [drop, setDrop] = useState<boolean>(true);
  const sortRef = React.useRef<HTMLInputElement>(null);
  const { data, disabled, type, loading, min, large, block, outlined, text} = props;

  const changeDropHandler = () => {
      setDrop(!drop);
  };


  const handleOutsideClick  = (event:any) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setDrop(false);
    }
  };


  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick );
    return ()=> document.removeEventListener('click', handleOutsideClick )
  }, []);

  return (
    <div className="dropDown" ref={sortRef}>
      <Button callback={changeDropHandler} type={type} disabled={disabled} loading={loading} min={min} large={large} block={block} outlined={outlined} text={text}>DROPDOWN</Button>
      <div className="dropDown__items-wrapper">
        {
          <ul className={`dropDown__items ${drop && "dropDown__items_active"}`}>
            {data.map((i) => (
              <li onClick={changeDropHandler} className="dropDown__item">{i}</li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
};
