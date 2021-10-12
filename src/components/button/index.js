import React from 'react'
import './style.css'

const Button = (props) => {
  const { isActive, value, handle } = props

  return (
    <button
      className={'btn' + (isActive ? ' active' : '')}
      value={value}
      onClick={handle}
    >
      {value}
    </button>
  )
}

export default Button
