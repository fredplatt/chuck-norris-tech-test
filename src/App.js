import EmailInput from "./components/EmailInput";
import Joke from "./components/Joke";
import EmailSender from "./functions/EmailSender";
import "./App.css";
import { useState } from "react";

function App() {
  const [joke, setJoke] = useState('')

  const handleSend = (emails) => {
    EmailSender(emails, joke)
  }

  return (
    <div className="App">
      <h1>Chuck Norris is no joke.</h1>
      <Joke currentJoke={setJoke} />
      <EmailInput handleSend={handleSend} />
    </div>
  );
}

export default App;
