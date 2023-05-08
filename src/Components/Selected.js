import React from 'react'

export const Selected = ({item}) => {
  return (
    <div key={item.id} className='selected'>{item.number}</div>
  )
}
