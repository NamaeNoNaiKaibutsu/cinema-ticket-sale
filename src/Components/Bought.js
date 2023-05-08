import React from 'react'

export const Bought = ({item}) => {
  return (
    <div key={item.id} className='bought'>{item.number}</div>
  )
}
