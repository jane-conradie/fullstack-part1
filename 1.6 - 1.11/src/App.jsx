import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  const getSum = () => {
    return good + bad + neutral;
  };

  const getAverage = () => {
    return (good - bad) / getSum();
  };

  const getPositive = () => {
    return (good / getSum()) * 100;
  };

  return getSum() == 0 ? (
    <div>No feedback given</div>
  ) : (
    <div>
      <h1>
        <b>statistics</b>
      </h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={getSum()} />
      <StatisticLine text="average" value={getAverage()} />
      <StatisticLine text="positive" value={getPositive()} symbol="%" />
    </div>
  );
};

const StatisticLine = ({ text, value, symbol }) => {
  return (
    <p>
      {text} {value} {symbol}
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
