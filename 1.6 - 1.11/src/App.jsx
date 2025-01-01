import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistic = ({ text, total }) => {
  return (
    <p>
      {text} {total}
    </p>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => {
    setGood(good + 1);
  };

  const addNeutral = () => {
    setNeutral(neutral + 1);
  };

  const addBad = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <h1>
        <b>give feeback</b>
      </h1>
      <Button handleClick={addGood} text="good" />
      <Button handleClick={addNeutral} text="neutral" />
      <Button handleClick={addBad} text="bad" />
      <h1>
        <b>statistics</b>
      </h1>
      <Statistic text="good" total={good} />
      <Statistic text="neutral" total={neutral} />
      <Statistic text="bad" total={bad} />
    </>
  );
};

export default App;
