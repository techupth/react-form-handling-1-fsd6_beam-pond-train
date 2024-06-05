import "./App.css";
import { useState } from "react";



function App() {
  const [text, setText] = useState('greetingTextChange')
  const [inputText, setInputText] = useState('')

  const handInputCahnge = (event) => {
    setInputText(event.target.value)
  }

  const updateText = () => {
    setText(inputText)
  }
  


  return (
    <div className="App">
      <div className="greeting-container">{text}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" value={inputText} onChange={handInputCahnge}/>
      </div>

      <div className="buttons">
        <button onClick={updateText}>Update text</button>
      </div>
    </div>
  );
}

export default App;
