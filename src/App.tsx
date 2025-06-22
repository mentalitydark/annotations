import './App.css'
import { ListCards, NewCard, NewItem } from './components'

function App() {
 
  return (
    <>
      <div className='app-header'>
        <NewCard />
        <NewItem />
      </div>
      <ListCards />
    </>
  )
}

export default App
