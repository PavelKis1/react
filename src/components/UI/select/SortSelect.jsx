import React from 'react'

function SortSelect({ options, defaultValue, value, onChange }) {
    return (
        <select
            onChange={event => onChange(event.target.value)}
            value={value}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={options.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>)
}

export default SortSelect