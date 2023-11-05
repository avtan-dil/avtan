import { useContext } from "react"
import CountContext from "./components/CountContext"


const Index = () => {
    const { count, increaseBy, decreaseBy } = useContext(CountContext)
  return (
    <div>
        Count: { count }
        <button onClick={() => {increaseBy(100)}}>
            +
        </button>
        <button onClick={() => {decreaseBy(100)}}>
            -
        </button>
    </div>
  )
}

export default Index