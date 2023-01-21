import React from 'react'
import { Header, Pizza } from '../../components'

const OrderPage = ({ toppings }) => {

    const selected = []

    const handleSelect = (topping) => {
        selected.push(topping);
        console.log(selected);
    }

    return (
        <div>
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
                <button className="primary-button" >
                    {'PLACE AN ORDER'}
                </button>
            </div>
            
            
            <label className='track-order-text'>Track an Order</label>




        </div>

    )
}

export default OrderPage