import { useState } from "react";
import "./App.css";

function App() {
  const [greetMessage, setGreetMessage] = useState("Greeting Message");
  const [input, setInput] = useState("");

  const update = () => {
    setGreetMessage(input);
    setInput("");
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">
          <input
            id="greeting-message"
            type="text"
            value={input}
            onChange={ (event) =>{setInput(event.target.value)}}
          />
        </label>
      </div>

      <div className="buttons">
        <button onClick={update}>Update text</button>
      </div>
    </div>
  );
}

export default App;
