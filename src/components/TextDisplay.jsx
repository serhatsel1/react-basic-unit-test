import { useState } from "react";
import Output from "./Output";

const TextDisplay = () => {
  const [changeText, setChangeText] = useState(false);

  const changeHandler = () => {
    setChangeText(!changeText);
  };

  return (
    <>
      <h2>Hello World !</h2>

      {!changeText ? <Output>How are you !</Output> : <Output>Whatsapp niggas !</Output>}

      <button onClick={changeHandler}>Change Text</button>
    </>
  );
};

export default TextDisplay;
