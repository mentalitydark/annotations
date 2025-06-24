import './App.css'
import { ListCards, NewCard, NewItem, TimerCard } from './components'

function App() {
 
  return (
    <>
      <div className='app-header'>
        <NewCard />
        <NewItem />
        <TimerCard />
      </div>
      <ListCards />
    </>
  )
}

export default App
