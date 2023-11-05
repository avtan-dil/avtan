import { useState } from "react"
import CountContext from "../components/CountContext"

const CountContextProvider = ( { children } ) => {
    const [count, setCount] = useState(0)

   function increaseBy(amount){
     setCount(count + amount)
   }

   function decreaseBy(amount) {
    setCount(count - amount)
   }

  return <CountContext.Provider value={{ count, increaseBy, decreaseBy }}>
   {children}
  </CountContext.Provider>
}

export default CountContextProvider