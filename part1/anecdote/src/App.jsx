import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
    
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

  const getAnecdote = () => {
    console.log('random index drawn', getAnecdote)

    return(
      Math.floor(Math.random() * anecdotes.length )
    )
  }

  const handleClick = () => {
    const nextAnecdote = getAnecdote()
    console.log('click is being handled')
    return(
      setSelected(nextAnecdote)
    )
  }

  const NextButton = () => {
    console.log('button is here')

    return(
      <button onClick = {handleClick}>
        Show me next anecdote
      </button>
    )
  }


  const handleVote = () => {
      const newVote = [...vote];
      newVote[selected] += 1;
      setVote(newVote);
  }

  const VoteButton = () => {
    console.log('vote button active', vote)
    return(
      <button onClick={handleVote}>
        vote
      </button>
    )
  }

  const HighestVote = () =>{
    const highestVote = Math.max(...vote)
    const highestVoteAnecdoteIndex = vote.indexOf(highestVote, 0)
    const highestVoteAnecdote = anecdotes[highestVoteAnecdoteIndex]

    console.log('highest vote number is index', highestVote) 
    console.log('the highest vote anecdote is', anecdotes[highestVoteAnecdoteIndex])
    console.log('the index is', highestVoteAnecdoteIndex)
    return(
      <p>{highestVoteAnecdote}</p>
    )

  }

  return (
    <div>
      <h1>anecdotes of the day</h1>
      {anecdotes[selected]}       <VoteButton />

      <br />
      <p>has {vote[selected]} votes</p>
      <NextButton />
      <h2>anecdotes with most votes</h2>
      <HighestVote />
    </div>
  )
}

export default App