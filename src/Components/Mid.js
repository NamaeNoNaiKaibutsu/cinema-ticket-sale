import React from 'react'
import { Background } from './Background'
import { Free } from './Free'
import { Selected } from './Selected'
import { Bought } from './Bought'

export const Mid = ({move, list}) => {

  return (
    <div className='grid-top'>
      {list.map(item => {
        return item.status === 'bg' ? <Background key={item.id} item={item} /> : item.status === 'free' ? <Free move={move} key={item.id} item={item} /> : item.status === 'selected' ? <Selected key={item.id} item={item} /> : item.status === 'bought' ?  <Bought key={item.id} item={item} /> : <div className='free'>{item.number}</div>
      } )}
    </div>
  )
}
