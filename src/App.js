import React, { useState } from 'react';
import _ from "lodash"

function App() {
  let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  let [ cards, setCards ] = useState(_.shuffle(list));
  let [ collect, setCollect ] = useState(false);
  const findIndex = (i) => _.indexOf(cards, i)
  return (
    <div className="App">
        <button onClick={() => setCards(_.shuffle(list))}>Shuffle</button>
        <ul style={{ position: "relative", minHeight: 210 }}>
          {list.map((item, index) => <li
            className="shadow-effect" 
            style={{ zIndex: findIndex(item), left: (30 * findIndex(item)) }} 
            key={index} 
            >{item}</li>
          )}
        </ul>
        <br/>
        <button onClick={() => setCollect(!collect)}>Toggle Collect</button>
        <br/>
        <ul style={{ position: "relative"}}>
          {list.map( (item, index) => <li
            className="shadow-effect" 
            style={{ zIndex: index, left: ((30 * collect)  * index) }} 
            key={index} 
            >{item}</li>
          )}
        </ul>
    </div>
  );
}

export default App;
