import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  const getSum = () => {
    return good + bad + neutral;
  };

  const getAverage = () => {
    return (good * 1 + bad * -1 + neutral * 0) / getSum();
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
      <table>
        <tbody>
          <tr>
            <td>
              <StatisticLine text="good" value={good} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="neutral" value={neutral} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="bad" value={bad} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="all" value={getSum()} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="average" value={getAverage()} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="positive" value={getPositive()} symbol="%" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const StatisticLine = ({ text, value, symbol }) => {
  return (
    <div>
      {text} {value} {symbol}
    </div>
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
