import { useState } from 'react'

const Header = ({text}) => {
  return (
  <h1>
    {text}
  </h1>
  )
}
const Button = ({text, handlerFunction}) => {
  return (
    <button onClick={handlerFunction}>
      {text}
    </button>
  )
}
const StatisticLine = ({text, value}) => {

  return (
    <p>
      {text} {value}
    </p>
  )
}
const Statistics = (props) => {
  //if no buttons pressed
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
    <div>
      <Header text="statistics" />
      <p>No feedback given</p>
    </div>
    )
  }

  //calculate stats
  const total = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / total
  const positivePercent = (props.good / total) * 100

  //if buttons pressed
  return (
  <div>
    <Header text="statistics" />
  
    <table>
    <tbody>
      <tr>
        <td><StatisticLine text="good" value={props.good} /></td>
      </tr>
      <tr>
        <td><StatisticLine text="neutral" value={props.neutral} /></td>
      </tr>
      <tr>
        <td><StatisticLine text="bad" value={props.bad} /></td>
      </tr>
      <tr>
        <td><StatisticLine text="all" value={total} /></td>
      </tr>
      <tr>
        <td><StatisticLine text="average" value={average} /></td>
      </tr>
      <tr>
        <td><StatisticLine text="positive" value={`${positivePercent} %`} /></td>
      </tr>
    </tbody>
    </table>

  </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const updateGood = () => {
    setGood(good + 1);
  }
  const updateNeutral = () => {
    setNeutral(neutral + 1);
  }
  const updateBad = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <Header text="give feedback" />
      <Button text="good" handlerFunction={updateGood} />
      <Button text="neutral" handlerFunction={updateNeutral} />
      <Button text="bad" handlerFunction={updateBad} />

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}





export default App
