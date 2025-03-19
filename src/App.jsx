import React from 'react';
import Greeting from './Greeting';
import First from './First';
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Greeting message="Hello from the Greeting component!" />
      <First message = "Hello from the First component!"/>
    </div>
  );
}

export default App;

