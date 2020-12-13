import React from 'react'

const Notification = ({message}) => {
  
  let notificationStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16,
    border: '3px solid green' 
  }

  if (message === null) {
    return null
  }
  
  else if (message.includes('not')) {
    notificationStyle = {
      color:'red',
      fontStyle: 'bold',
      fontSize: 16,
      border: '3px solid red' 
    }
  }

  return (
    <div style={notificationStyle}>
      {message}
    </div>
  )

}

export default Notification