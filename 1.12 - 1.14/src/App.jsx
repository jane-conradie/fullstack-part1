import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState(new Uint8Array(8));

  const addVote = () => {
    // make copy of array
    const copy = [...votes];

    copy[selected] += 1;

    setVotes(copy);
  };

  // getting total of highest votes
  const highestVote = Math.max(...votes);

  return (
    <>
      <h1>
        <b>Anecdote of the day</b>
      </h1>
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <div>
        <button onClick={() => addVote()}>vote</button>
        <button
          onClick={() =>
            setSelected(Math.floor(Math.random() * (anecdotes.length - 1)))
          }
        >
          next anecdote
        </button>
      </div>
      <div>
        <h1>
          <b>Anecdote with most votes</b>
        </h1>
        {anecdotes[votes.indexOf(highestVote)]}
        <br />
        has {highestVote} votes
      </div>
    </>
  );
};

export default App;
