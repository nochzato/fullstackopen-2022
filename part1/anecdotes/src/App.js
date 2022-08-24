import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  ];

  const [selected, setSelected] = useState(0);

  const initialPoints = {};
  anecdotes.forEach((_, index) => {
    initialPoints[index] = 0;
  });

  const [points, setPoints] = useState(initialPoints);

  const anecdoteWithMostVotes = () => {
    const max = Object.keys(points).reduce(
      (a, v) => Math.max(a, points[v]),
      -Infinity
    );
    const result = Object.keys(points).filter((v) => points[v] === max)[0];
    return anecdotes[result];
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button
        onClick={() => {
          const copy = { ...points };
          copy[selected] += 1;
          setPoints(copy);
        }}
      >
        vote
      </button>
      <button
        onClick={() => {
          let index = Math.floor(Math.random() * anecdotes.length);
          setSelected(index);
        }}
      >
        next anecdote
      </button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdoteWithMostVotes()}</p>
    </div>
  );
};

export default App;
