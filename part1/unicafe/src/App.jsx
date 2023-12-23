import { useState } from 'react'

const Button = ({ text, onClickButton }) => <button onClick={onClickButton}>{text}</button>

const StatisticRow = ({ text, value }) => (
  <tr>
    <td>{text}:</td>
    <td>{value}</td>
  </tr>
)

function Statistics ({ good, neutral, bad }) {
  let all = 0, average = 0, positive = 0
  const isThereFeedback = (good > 0 || neutral > 0 || bad > 0)
  if (isThereFeedback) {
    all = good + neutral + bad
    average = ((good * 1) + (bad * -1)) / all
    positive = `${(good / all * 100).toString()} %`
  }

  if (isThereFeedback) {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticRow text='Good' value={good}/>
            <StatisticRow text='Neutral' value={neutral}/>
            <StatisticRow text='Bad' value={bad}/>
            <StatisticRow text='All' value={all}/>
            <StatisticRow text='Average' value={average}/>
            <StatisticRow text='Positive' value={positive}/>
          </tbody>
        </table>
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
        <Button onClickButton={() => handleClick('good')} text='Good' />
        <Button onClickButton={() => handleClick('neutral')} text='Neutral' />
        <Button onClickButton={() => handleClick('bad')} text='Bad' />
      </div>
      <hr />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
