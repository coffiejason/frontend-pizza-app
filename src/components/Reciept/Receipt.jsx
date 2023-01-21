import React from 'react'
import { ReceiptItem } from '..'

const Receipt = () => {
  return (
    <div className='reciept-container'>
      <div className="receipt">
        <header className="receipt__header">
          <p className="receipt__title">
            Order Receipt
          </p>
          <p className="receipt__date">21 December 2020</p>
        </header>
        <dl className="receipt__list">
          <ReceiptItem />
          <ReceiptItem total={true} />
        </dl>
      </div>

    </div>
  )
}

export default Receipt