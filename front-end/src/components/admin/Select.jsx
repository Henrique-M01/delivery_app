import React from 'react'

function Select({name, label, selectOptions, ...selectProps}) {
  const id = `select-${name}`
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={id}>
        {label}
        <select name={name} id={id} {...selectProps}>
          {selectOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default Select