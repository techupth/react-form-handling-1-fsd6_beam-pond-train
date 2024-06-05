import "./App.css";
import { useState } from "react";

function App() {
  const [newText, setNewText] = useState("")
  const [inputText, setInputText] = useState("Greeting Message")
  console.log(newText)
  return (
    <div className="App">
      <div className="greeting-container">{inputText}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" onChange={(e) => setNewText(e.target.value)}/>
      </div>

      <div className="buttons">
        <button onClick={()=>setInputText(newText)}>Update text</button>
      </div>
    </div>
  );
}

export default App;
