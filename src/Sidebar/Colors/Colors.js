import React from 'react'
import './Colors.css'
import Input from '../../components/Input'

export default function Colors({handleChange}) {
  return (
    <div>
      <h2 className='sidebar-title color-title'>Colors</h2>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      
    </div>
  )
}
