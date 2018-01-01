import React from 'react'
import createReactClass from 'create-react-class'
import T from 'prop-types'
import findIndex from 'lodash//findIndex'

const style = {
  display: 'block',
  width: '100%',
  boxSizing: 'border-box',
}

const optionType = T.shape({
  label: T.string.isRequired,
  value: T.any,
})

export default createReactClass({
  displayName: 'Demo.Controls.InputSelect',

  propTypes: {
    value: T.any,
    options: T.arrayOf(optionType.isRequired).isRequired,
    onChange: T.func.isRequired,
  },

  handleChange(e) {
    this.props.onChange(this.props.options[e.target.value].value)
  },

  renderOption(choice, index) {
    return (
      <option key={index} value={index}>
        {choice.label}
      </option>
    )
  },

  render() {
    const {options, value} = this.props
    return (
      <select
        style={style}
        value={findIndex(options, x => x.value === value)}
        onChange={this.handleChange}
      >
        {options.map(this.renderOption)}
      </select>
    )
  },
})
