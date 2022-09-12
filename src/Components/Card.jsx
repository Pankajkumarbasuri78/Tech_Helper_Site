import React from 'react'

export const Card = () => {
  return (
    <div className='card_container' style={{display: 'flex', flexDirection: 'column' }}>
         <h2 className='card__title'>Lorem ipsum dolor sit amet. 
          Ea delectus rerum et officiis magnam est consequatur provident
          ut architecto repellat et dolorem rerum. Est iure 
          recusandae sit sunt omnis qui esse quaerat.
          </h2>
          <div class="buttons-container">
             <button type="button"  class="btn btn-cancel" > join </button>
          </div>   
    </div>
  )
}
