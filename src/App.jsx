import React from 'react';
import SlotM from './SlotMach';
const App=()=>{
return(<>
  <h1 className="heading_style">Welcome  <span style={{fontWeight:'bold'}}>To Slot Machine</span></h1>
<div className="slotmachine">
  <SlotM x="😊" y="😊" z="😊"/>
  <SlotM x="😑" y="😑" z="😑"/>
  <SlotM x="😶" y="🙄" z="😶"/>
 </div>
</>)
}

export default App;