import React, { useState } from "react";

function App() {

  setInterval(updateTime, 1000);
  const now = new Date().toLocaleTimeString();
  // var today = new Date();
  // let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const [time, setTime] = useState(now);
  
  function updateTime(){
    const newTime = new Date().toLocaleTimeString();
    
    setTime(newTime)
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick = {updateTime}>Get Time</button>
    </div>
  );
}

export default App;
