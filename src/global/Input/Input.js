import React from 'react'
import "./Input.css"

function Input({ placeholder, data, setData }) {
  return (
    <input placeholder={placeholder} value={data} onChange={e => setData(e.target.value)} />
  )
}

export default Input