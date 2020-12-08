import React from 'react'

const Total = ({parts}) => {
    const total = parts.map((part) => part.exercises)
                       .reduce((a, b) => a+b, 0)
    console.log(total)
    return (
      <div>
        <h3>Total of {total} exercises</h3>
      </div>
    )
}

export default Total