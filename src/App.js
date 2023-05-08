import './App.css';
import { Top } from './Components/Top';
import { Mid } from './Components/Mid';
import { Bottom } from './Components/Bottom';
import { useState, useEffect } from 'react';
import { midGrid } from './Data';

function App() {
  const [list, setList] = useState(midGrid);
  const [amount, setAmount] = useState(0);

  const Select = (e) => {
    const freeSeats = midGrid.find(item => item.status === 'free')
    freeSeats.status = 'selected';
    const newList = midGrid.map(item => item.id === freeSeats.id ? freeSeats : item);
    setList(newList);
    e.target.textContent === 'Adult' || e.target.textContent === '31,00' || e.target.textContent === 'Adult31,00' ? setAmount(prev => prev + 31) : 
    e.target.textContent === 'Student' || e.target.textContent === '23,00' || e.target.textContent === 'Student23,00' ? setAmount(prev => prev + 23) : 
    e.target.textContent === 'Child' || e.target.textContent === '19,00' || e.target.textContent === 'Child19,00' ? setAmount(prev => prev + 19) : 
    e.target.textContent === 'Senior' || e.target.textContent === '19,00' || e.target.textContent === 'Senior19,00' ? setAmount(prev => prev + 19) : 
    e.target.textContent === 'Disabled' || e.target.textContent === '0,00' || e.target.textContent === 'Disabled0,00' ? setAmount(prev => prev + 0) : 
    e.target.textContent === 'Group' || e.target.textContent === '15,50' || e.target.textContent === 'Group15,50' ? setAmount(prev => prev + 15,50) : setAmount(0)
  }

  const Buy = () => {
    const selectedSeats = midGrid.filter(item => item.status === 'selected')
    const boughtSeats = selectedSeats.map(item => item.status = 'bought')
    const bought2 = midGrid.concat(boughtSeats)
    const finalBought = bought2.filter((item, pos) => bought2.indexOf(item) === pos)
    midGrid.map(item => finalBought)
    setAmount(prev => 0)
  }

  const Delete = () => {
    const deleted = midGrid.map(item => {
      if (item.status === 'selected') {
        item.status = 'free'
        return item
      }
      else return item
    })
    setList(prev => deleted)
    setAmount(prev => 0)
  }

  const Move = (id) => {
    const selected = midGrid.filter(item => item.status === 'selected')
    const x = selected.length 
    const newList = midGrid.map(item => {
      if (item.status === 'bg') {
        return item
      }
      else if (x === 0) {
        return item
      }
      else if (item.id === id) {
        item.status = 'selected'
        return item
      }
      else if (item.status === 'bought') {
        return item
      }
      else if (item.id > id && item.id < id + x && item.status !== 'bg') {
        item.status = 'selected'
        return item
      }
      else if (item.id === id + 1) {
        item.status = 'free'
        return item
      }
      else if (item.id  > id && item.id < id + x && item.status === 'bg') {
        item.status = 'bg'
        return item
      }
      else {
        item.status = 'free'
        return item
      }
    })
    setList(newList)
    console.log(list)
  }

  useEffect(() => {
    console.log(list)
  }, [list])
  
  
  return (
    <div className="flex-div">
      <Top />
      <Mid move={Move} list={list} />
      <Bottom amount={amount} deselect={Delete} buy={Buy} select={Select}/>
    </div>
  );
}

export default App;
