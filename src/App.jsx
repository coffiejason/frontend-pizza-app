import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import reactLogo from './assets/react.svg'
import './App.css'
import { Checkbox } from '@chakra-ui/react'

import OrderPage from './Pages'

let toppings = [
  {
    name:"Pizza Neapolitan",
    img: "https://www.jotform.com/uploads/LaurelWood/form_files/pizza-assortment-set_1284-20110.jpg",
    toppingsarr:["Cheese","Pear", "Mushrooms"],
    toppings: "Cheese, Pear, Mushrooms" 
  },
  {
    name: "Pizza Pepperoni",
    img: "https://www.jotform.com/uploads/LaurelWood/form_files/pizza-assortment-set_1284-20110%2520copy%25202.jpg",
    toppingsarr:["Cheese","Pear", "Mushrooms"],
    toppings: "Cheese, Pear, Mushrooms" 

  },
  {
    name: "Pizza Mare e Monti",
    img: "https://www.jotform.com/uploads/LaurelWood/form_files/pizza-assortment-set_1284-20110%2520copy.jpg",
    toppingsarr:["Cheese","Pear", "Mushrooms"],
    toppings: "Cheese, Pear, Mushrooms" 
  },
  {
    name: "Pizza Mare e Monti",
    img: "https://www.jotform.com/uploads/LaurelWood/form_files/slices-pizza_23-2147517737%20copy%204.jpg",
    toppingsarr:["Cheese","Pear", "Mushrooms"],
    toppings: "Cheese, Pear, Mushrooms" 
  },
]



function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <OrderPage toppings={toppings}/>
    </div>
  )
}

export default App
