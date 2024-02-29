"use client"
import React from 'react'

const ButtonLogin = ({text, className, ...props}) => {
  return (
    <button {...props} className={className}>
        {text}
    </button>
  )
}

export default ButtonLogin