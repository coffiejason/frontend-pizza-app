import React from 'react'

const Pizza = (props) => {
  return (
    <div className='card-container'>
        <input type={'checkbox'} onClick={()=>{props.onClick({})}}/>
        <div className='img-div'>
            <img src={props.image}/>
        </div>
        <div className='text-div'>
            <h3>{props.flavor}</h3>
            <p>{props.toppings}</p>
        </div>
    </div>
  )
}

export default Pizza