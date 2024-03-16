import PropTypes from 'prop-types';

function Checkbox ({
    name,
    value,
    handleOnChange
}) {
  return (
      <div className="flex items-center mb-4">
          <label htmlFor={name} className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">{name}</label>
          <input
              id={name}
              type="checkbox"
              value={value}
              onChange={(e) => handleOnChange(e)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
      </div>
  )
}

Checkbox.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    handleOnChange: PropTypes.func
}

export default Checkbox