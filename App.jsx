import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Foo from './Foo'
import Bar from './Bar'
function App() {
  const [count, setCount] = useState(0)

  var myrender;
  if(count == 0) {
    myrender = <Foo/>
  }
  else {
    myrender = <Bar/>
  }
  return (
    <>
        <button onClick={() => setCount((count) => count ^ 1)}>
          count is {count}
        </button>
        {myrender}
    </>
  )
}

export default App
