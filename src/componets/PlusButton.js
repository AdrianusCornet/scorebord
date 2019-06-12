import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PlusButton extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
  }

  render() {
    return (
      <button onClick = { this.props.onClick }>+</button>
    )
  }
}
