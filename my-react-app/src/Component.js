import React, { useEffect as useReactEffect } from 'react';

const Component = () => {
  useReactEffect(() => {
    // Your side effect logic here
    console.log('Component mounted or updated');
  }, []);

  return (
    <div>
      <button>Subscribe</button>
      <br />
      <br />

      <button>To</button>
      <br />
      <br />

      <button>DropXout</button>
      <h1>{clicked}</h1>
    </div>
  );
}

export default Component;
