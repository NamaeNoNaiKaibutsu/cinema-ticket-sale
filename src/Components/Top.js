import React from 'react'
import { topGrid } from '../Data'

export const Top = () => {
  return (
    <div className='grid-top'>
      {topGrid.map(item => {
        return item.isLight ? 
        <div key={item.id} className='light'></div> : <div key={item.id} className='dark'></div>
      } )}
    </div>
  )
}
