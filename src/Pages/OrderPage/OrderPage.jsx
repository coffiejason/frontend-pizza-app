import React from 'react'
import { Header, Pizza } from '../../components'

import {useNavigate } from 'react-router-dom'

const OrderPage = ({ toppings }) => {

    const selected = [];
    const navigate = useNavigate();

    const handleSelect = (topping) => {
        selected.push(topping);
        console.log(selected);
    }



    function handleClick() {
      navigate("/status");
    }

    return (
        <>
            <Header />

            <label>Place an Order</label>

            <div>
                {
                    toppings.map((topping) => (
                        <Pizza image={topping.img} flavor={topping.name} toppings={topping.toppings} onClick={handleSelect} />
                    ))
                }
            </div>
            
            <div>
                <button className="primary-button" onClick={handleClick}>
                    {'PLACE AN ORDER'}
                </button>
            </div>
            

            <label className='track-order-text' onClick={handleClick}>Track an Order</label>




        </>

    )
}

export default OrderPage