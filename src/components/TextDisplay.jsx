import { useState } from "react";

const TextDisplay = () => {
  const [changeText, setChangeText] = useState(false);

  const changeHandler = () => {
    setChangeText(!changeText);
  };

  return (
    <>
      <h2>Hello World !</h2>

      {!changeText ? <p>How are you !</p> : <p>Whatsapp niggas !</p>}

      <button onClick={changeHandler}>Change Text</button>
    </>
  );
};

export default TextDisplay;
