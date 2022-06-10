import React from 'react'
import Input from './Input'
import Select from './Select'

function FormOption({name, label, value, type, errorMessage, ...props}) {
  return (
    type === 'select' ?
      <Select name={name} label={label} {...props} /> :
      <Input 
        name={name} 
        label={label} 
        type={type} 
        errorMessage={errorMessage} {...props} 
      />
  )
}

export default FormOption