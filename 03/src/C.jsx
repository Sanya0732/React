import React from 'react';
import { GreetContext , Greet2Context } from './A';

function C() {
  return (
    <GreetContext.Consumer>
      {(val) => return{
        <h1>Greet: {val}</h1>}
    </GreetContext.Consumer>
  );
}

export default C;
