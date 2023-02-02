import "./App.css";
import { useState } from "react";
import { useMemo } from "react";

function App() {

  const [text, setText] = useState("");
  const valid = useMemo(()=>{
    const reg = /^\d+$/;
    return reg.test(text);
  },[text]);
  
  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={text} 
          onChange={(e) => setText(e.target.value)}
        />
        <span className="icon is-small is-right">
          <i className={`fas ${valid ? "fa-check" : "fa-times"}`} />
        </span> 
        <p>{text}</p>
      </div>
    </div>
    
  );
}

export default App;
