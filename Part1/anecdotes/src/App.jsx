import { useState } from 'react'

const MostPopularQuote = (props) => {
  let maxIndex = 0;
  let maxVotes = props.votes[0];
  for (let i = 1; i < props.votes.length; i++) {
    if (props.votes[i] > maxVotes) {
      maxIndex = i;
      maxVotes = props.votes[i];
    }
  }

  let mostPopularQuote = props.anecdotes[maxIndex];

  return (
    <div>{mostPopularQuote}</div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const generateRandomIndex = () => {
    //we want to generate random int bewteen 0 and anecdotes.length - 1
    //then, we use setSelected to change selected
    const index = Math.floor(Math.random() * anecdotes.length)
    setSelected(index)
  }
  const incrementVote = () => {
    const copy = [...votes]
    copy[selected]++;
    setVotes(copy)
  }

  return (
  <div>
    <h2>Anecdote of the day</h2>
    <div>
      {anecdotes[selected]}
    </div>
    <div>
      has {votes[selected]} votes
    </div>
    <button onClick={incrementVote}>
      vote
    </button>
    <button onClick={generateRandomIndex}>
      random quote
    </button>

    <h2>Anecdote with most votes</h2>
    <MostPopularQuote anecdotes={anecdotes} votes={votes}/>
  </div>
  )
}

export default App
