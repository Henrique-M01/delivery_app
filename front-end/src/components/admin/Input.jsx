import React, { useState } from 'react'

function Input({name, label, value, type, errorMessage, ...inputProps}) {
  const [focus, setFocus] = useState(false)
  const id = `input-${name}`

  const handleFocus = () => setFocus(true)
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={id}>
        {label}
        <input className='form-input' 
          type={type}
          id={id}
          onFocus={handleFocus}
          name={name}
          focused={focus.toString()}
          {...inputProps}
          />
          <span className="form-error">{errorMessage}</span>
      </label>
    </div>
  )
}

export default Input