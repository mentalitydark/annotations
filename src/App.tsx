import './App.css'
import { ListCards, NewCard, NewItem, TimerCard, UtilityCard } from './components'

function App() {
 
  return (
    <>
      <div className='app-header'>
        <NewCard />
        <NewItem />
        <div className='app-header-group'>
          <TimerCard />
          <UtilityCard />
        </div>
      </div>
      <ListCards />
    </>
  )
}

export default App
