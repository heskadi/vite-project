import React from 'react'

const ChangeMessageState = ({handleMessage}) => {
    const messages = ["Hi.", "Hello.", "Goodmorning."]
  return (
    <div>
      <button onClick={() => handleMessage(messages[0])}>Message 1</button>
      <button onClick={() => handleMessage(messages[1])}>Message 2</button>
      <button onClick={() => handleMessage(messages[2])}>Message 3</button>
    </div>
  )
}

export default ChangeMessageState
