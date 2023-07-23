import React from 'react'
import "../styles/form.css"
import PriceClick from './PriceClick'
export default function Form() {
  return (
    <div className='main-form'>
    <div className='form-top'>

    <div className='form-top-1'>
      <span className='form-top-span'>1</span>
      <span className='form-top-span-text'>Sign Up</span>
      </div>
    <div className='form-top-1'>
      <span className='form-top-span'>2</span>
      <span className='form-top-span-text'>Subscribe</span>
      </div>
    </div>
    <div className='form-Text'>
    Select your subcription plan
    </div>
    <div className='form-input-container'>
    <PriceClick/>
    </div>
    <div className='form-button-div'>
      <div className='form-button-cancel'>cancel</div>
      <div className='form-button-pay'>proceed to pay</div>
    </div>
    <div className='form-rezorpay-icon'>
    <img src='../img/Frame.png' alt="bookIcon" />
    </div>
    </div>
  )
}
