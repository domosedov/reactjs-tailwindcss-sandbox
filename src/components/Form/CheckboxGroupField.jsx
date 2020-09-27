import React, { useContext, useCallback } from 'react'
import PropTypes from 'prop-types'
import CheckboxButton from './CheckboxButton'
import { FormContext } from './context'

const CheckboxGroupField = ({ field, label, required = false }) => {
  const { state, dispatch } = useContext(FormContext)

  const handleChange = useCallback(
    (evt) => {
      console.log(evt.target.value)
      dispatch({ type: `change_${field.name}`, payload: evt.target.value })
    },
    [dispatch, field.name]
  )

  return (
    <div className="mb-4 flex flex-col">
      <span className="text-gray-800 font-light mb-1">
        {label}
        {required && <span className="text-red-600">*</span>}
      </span>
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {field.options.map((item) => (
          <CheckboxButton
            checkedValue={state[field.name][item.value]}
            name={field.name}
            label={item.label}
            key={item.value}
            value={item.value}
            handleChange={handleChange}
          />
        ))}
      </div>
    </div>
  )
}

CheckboxGroupField.propTypes = {
  field: PropTypes.shape({
    multiple: PropTypes.bool,
    name: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number
      })
    )
  }),
  required: PropTypes.bool,
  label: PropTypes.string
}

export default CheckboxGroupField