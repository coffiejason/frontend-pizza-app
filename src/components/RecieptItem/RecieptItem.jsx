import React from 'react'

const RecieptItem = (props) => {

    return props.total === true ? (
        <div className="receipt__list-row receipt__list-row--total">
            <dt className="receipt__item">Total</dt>
            <dd className="receipt__cost">£26.75</dd>
        </div>

    ) :
        (


            <div className="receipt__list-row">
                <dt className="receipt__item">CSS Candies</dt>
                <dd className="receipt__cost">£9.99</dd>
            </div>
        )
}

export default RecieptItem