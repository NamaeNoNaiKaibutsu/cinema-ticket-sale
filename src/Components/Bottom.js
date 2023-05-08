import React from 'react'

export const Bottom = ({amount, deselect, buy, select}) => {

  return (
    <div className='bottom-div'>
      <div className='delete button' onClick={deselect}>Delete</div>
      <div className='ticket button' onClick={select}><div>Adult</div><span>31,00</span></div>
      <div className='ticket button' onClick={select}><div>Student</div><span>23,00</span></div>
      <div className='ticket button' onClick={select}><div>Child</div><span>19,00</span></div>
      <div className='ticket button' onClick={select}><div>Senior</div><span>19,00</span></div>
      <div className='ticket button' onClick={select}><div>Disabled</div><span>0,00</span></div>
      <div className='ticket button' onClick={select}><div>Group</div><span>15,50</span></div>
      <div className='total button' onClick={buy}>Total: {amount}</div>
    </div>
  )
}
