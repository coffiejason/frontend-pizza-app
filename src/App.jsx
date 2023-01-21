import { useState } from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import  { OrderPage,StatusPage } from './Pages'

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
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<OrderPage toppings={toppings}/>}/>
        <Route path='/status' element={<StatusPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
