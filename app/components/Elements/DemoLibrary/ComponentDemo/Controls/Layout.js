import React from 'react'
import createReactClass from 'create-react-class'
import T from 'prop-types'
import flattenDeep from 'lodash//flattenDeep'
import ControlNoop from './ControlNoop'

const style = {
  background: '#eee',
  overflow: 'hidden',
  fontFamily: 'Menlo, Monaco, Consolas, "Lucida Console", monospace',
}
const styleItemTop = {
  float: 'left',
  width: '280px',
}
const styleItemSide = {
  marginBottom: '4px',
}

export default createReactClass({
  displayName: 'Demo.Controls.Layout',

  propTypes: {
    children: T.node.isRequired,
    onTop: T.bool.isRequired,
  },

  renderChildren() {
    const {onTop, children} = this.props
    const childStyles = onTop ? styleItemTop : styleItemSide
    return flattenDeep(children)
      .filter(x => x && x.type !== ControlNoop)
      .map((x, i) => (
        <div key={i} style={childStyles} className="react-demo__control-wrap">
          {x}
        </div>
      ))
  },

  render() {
    return (
      <div style={style} className="react-demo__controls">
        {this.renderChildren()}
      </div>
    )
  },
})
