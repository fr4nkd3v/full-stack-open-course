import { useState } from 'react'

function Statistics ({ good, neutral, bad }) {
  let all = 0, average = 0, positive = 0
  const isThereFeedback = (good > 0 || neutral > 0 || bad > 0)
  if (isThereFeedback) {
    all = good + neutral + bad
    average = ((good * 1) + (bad * -1)) / all
    positive = good / all * 100
  }

  if (isThereFeedback) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>All: {all}</p>
        <p>Average: {average}</p>
        <p>Positive: {positive} %</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feddback given</p>
      </div>
    )
  }
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (stat) => {
    if (stat === 'good') setGood(good + 1)
    if (stat === 'neutral') setNeutral(neutral + 1)
    if (stat === 'bad') setBad(bad + 1)
  }

  return (
    <>
      <div>
        <h1>Give Feedback</h1>
        <button onClick={() => handleClick('good')}>Good</button>
        <button onClick={() => handleClick('neutral')}>Neutral</button>
        <button onClick={() => handleClick('bad')}>Bad</button>
      </div>
      <hr />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
