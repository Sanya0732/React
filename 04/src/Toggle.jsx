import React, { useState } from 'react';

const Toggle = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(prevShow => !prevShow);
  };

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {show && <h1>Heyyyy!! I am Sanya!</h1>}
    </div>
  );
};

export default Toggle;
