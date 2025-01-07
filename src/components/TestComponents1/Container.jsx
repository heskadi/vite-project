import React from 'react'

const Container = ({children, myValue}) => {
  return (
    <div>
      <h2>Container Title</h2>
        {children}
        <p>The value is: {myValue}</p>
    </div>
  )
}

export default Container