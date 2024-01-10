import { useState } from 'react'
import './App.css'


function App() {

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
  const [votes, setVotes] = useState(anecdotes.reduce((acc,cur,idx) => {return {...acc,[idx]: 0}},{} ))

  const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  //console.log('votes',votes)

  const getRandomQuote = () => {
    const randomInt = randomIntFromInterval(0,anecdotes.length-1);
    //console.log(`current`, selected);
    //console.log(`random`,randomInt);
    return randomInt != selected ? randomInt : randomIntFromInterval(0,anecdotes.length-1); // have another chance to return a different quote if we get the same index
  }

  const handleGetQuote = () => setSelected(getRandomQuote)

  const handleVoteQuote = () => setVotes({...votes,[selected]: votes[selected] + 1})

  const getTopQuote = () => {
    const votesArray = Object.values(votes);
    const topQuote = votesArray.reduce((acc,cur) => acc + cur) > 0 ? votesArray.indexOf(Math.max(...votesArray)) : null // returns null if no votes so far
    //console.log('topQuote', topQuote)
    return topQuote
  }

  const topQuote = getTopQuote()


  return (
    <>
      <h1>Random developer quotes!</h1>

      <p className='instructions'>
        Click on the button to get a quote, vote for your favourites
      </p>

      <div className='quote'>
        <p>
          {anecdotes[selected]}
        </p>
      </div>
      <div className='score'>
        <p>this quote has {votes[selected]} votes</p>
      </div>

      <div className='controls'>
        <button onClick={handleVoteQuote}>Vote for quote</button>
        <button onClick={handleGetQuote}>Random quote</button>
      </div>
      
      <div>
        <h3>Top voted quote</h3>
        <div className='topQuote'>
          <p>
            {topQuote != null ? anecdotes[topQuote] : `no votes yet 😔`}
          </p>
        </div>
      </div>
    </>
  )
}

export default App
