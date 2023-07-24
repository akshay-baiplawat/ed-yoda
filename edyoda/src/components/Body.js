import React from 'react'
import MainLockup from './MainLockup'
import Form from './Form'
import "../styles/body.css"

export default function Body() {
  return (
    <div className='body-com'>
      <MainLockup/>
      <Form/>
    </div>
  )
}
