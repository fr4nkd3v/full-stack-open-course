import { useState } from 'react'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleClick = (stat) => {
    let [_good, _neutral, _bad, _all] = [good, neutral, bad, all]
    if (stat === 'good') {
      _good += 1
      setGood(_good)
    }
    if (stat === 'neutral') {
      _neutral += 1
      setNeutral(_neutral)
    }
    if (stat === 'bad') {
      _bad += 1
      setBad(_bad)
    }
    _all += 1
    setAll(_all)
    setAverage(((_good * 1) + (_bad * -1)) / _all)
    setPositive(_good / _all * 100)
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
        <p>All: {all}</p>
        <p>Average: {average}</p>
        <p>Positive: {positive} %</p>
      </div>
    </>
  )
}

export default App
