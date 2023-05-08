import React from 'react'

export const Free = ({move, item}) => {
  
  return (
    <div onClick={() => move(item.id)} key={item.id} className='free'>{item.number}</div>
  )
}
