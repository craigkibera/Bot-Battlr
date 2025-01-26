import React from 'react'

function Bot({ image, name, botClass,health,onClick}) {
    
  return (

    <div className='bot-card' onClick={onClick}>
      <img
        src={image}
        alt={name}
        className='bot-image'
      />
      
      <h2 className='bot-name'>Name: {name}</h2>
      <p className='bot-class'>Class: {botClass}</p>
      <p>Health:{health}</p>
      <p></p>
    </div>
  );
}

export default Bot
