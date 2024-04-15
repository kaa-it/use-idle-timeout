import { useState } from 'react'
import './App.css'

// eslint-disable-next-line no-unused-vars
const useIdleTimeout = (timeout, onTimeout, onActivity) => {

}

function App() {
  const [active, setActive] = useState(false);

  const onActivity = () => {
      setActive(true);
  }

  const onTimeout = () => {
      setActive(false);
  }

  useIdleTimeout(3000, onTimeout, onActivity);

  return (
    <>
      <h2>{active && "НЕ ТРОГАЙ МЕНЯ!!!"}</h2>
    </>
  )
}

export default App
