import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { FormContext } from './context'

const TextAreaField = ({ label, name, required = false, type = 'text' }) => {
  const { state, dispatch } = useContext(FormContext)

  const handleChange = (evt) => {
    dispatch({ type: `change_${name}`, payload: evt.target.value })
  }

  return (
    <div className="mb-4 flex flex-col">
      <label className="text-gray-800 font-light mb-1" htmlFor={name}>
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <textarea
        className="border px-2 py-2 rounded md:px-1 md:py-1 duration-200 hover:border-indigo-300 focus:outline-none focus:shadow-outline text-gray-700 font-light"
        type={type}
        id={name}
        name={name}
        value={state[name]}
        onChange={handleChange}
        required={required}
      />
    </div>
  )
}

TextAreaField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool
}

export default TextAreaField
