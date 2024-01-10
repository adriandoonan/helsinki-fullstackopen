import { useState } from 'react'
import './App.css'

const Button = ({handleClick = null, text}) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({name, value}) => <tr key={name}><td>{name}</td><td>{value}</td></tr>

const Statistics = ({feedback, statistics}) => {
  const myStats = {...feedback, ...statistics}

  if (myStats.all > 0) {
    return (
      <div style={{textAlign: "left"}}>
        <h3>Statistics</h3>
        <table>
          <tbody>
            {Object.keys(myStats).map( item => <StatisticLine key={item} name={item} value={myStats[item]} /> )}
          </tbody>
        </table>
      </div>
    )
  }
}

function App() {

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleFeedback = (review) => {
    setFeedback({
      ...feedback,
      [review]: feedback[review] + 1
    })
  }

  const totalFeedback = Object.values(feedback).reduce((acc,cur) => acc + cur)

  const statistics = {
    all: totalFeedback,
    average: totalFeedback > 0 ? ((feedback.good - feedback.bad) / totalFeedback).toFixed(5) : null,
    positive: totalFeedback > 0 ? `${((feedback.good / totalFeedback) * 100).toFixed(5)} %` : ''
  }

  return (
    <>
      <h1>Please provide your feedback</h1>

      {Object.keys(feedback).map( level => 
        <Button key={level} text={level} handleClick={() => handleFeedback(level)} />)}

      <Statistics feedback={feedback} statistics={statistics}/>
    </>
  )
}

export default App
