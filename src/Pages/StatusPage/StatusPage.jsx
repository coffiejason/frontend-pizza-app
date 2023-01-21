import React from 'react'
import { Header } from '../../components'

const StatusPage = () => {
  return (
    <>
        <Header />

        <label>Track an Order</label>
        <div className='status-container'>
            <h3>Your Order Number is:</h3>
            <input type={'text'} placeholder={'Enter Tracking number'} maxLength={'10'}/>

        </div>
    </>
  )
}

export default StatusPage