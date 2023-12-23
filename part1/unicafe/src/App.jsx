import { useState } from 'react'

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
      <div>
        <h1>Statistics</h1>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
    </>
  )
}

export default App
