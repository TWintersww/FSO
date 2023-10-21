import { useState } from 'react'

const History = (props) => {
  if (props.clickArr.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.clickArr.join(' ')}
    </div>
  )
}
const Button = (props) => {
  return (
    <button onClick={props.handlerFunction}>
      {props.text}
    </button>
  )
}
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [clickArr, setArr] = useState([])
  const [totalClicks, setTotal] = useState(0)

  const updateLeft = () => {
    setArr(clickArr.concat('L'));
    const newLeft = left + 1;
    setLeft(newLeft);
    setTotal(newLeft + right);
  }
  const updateRight = () => {
    setArr(clickArr.concat('R'));
    const newRight = right + 1;
    setRight(newRight);
    setTotal(left + newRight);
  }

  return (
    <div>
      {left}
      <Button handlerFunction={updateLeft} text="left" />
      <Button handlerFunction={updateRight} text="right" />
      {right}
      <History clickArr={clickArr} />
    </div>
  )
}


export default App
