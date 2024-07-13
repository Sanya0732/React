import React, { createContext } from 'react';
import B from './B';

const GreetContext = createContext();
const Greet2Context = createContext();

function A() {
  const greet = "hello ";
  const greet2 = "heelo2";
  return (
    <div>
      <GreetContext.Provider value={greet}>
      <Greet2Context.Provider value={greet2}>

        <B />
        </Greet2Context.Provider>

      </GreetContext.Provider>
    </div>
  );
}

export { GreetContext , Greet2Context };
export default A;
