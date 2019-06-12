import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PlusButton from './PlusButton'
import './Player.css'

export default class Player extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }

  handleClick = () => {
    console.log('ping', this.props.id)
  }
  
  render() {
    return (
      <li className = "player">
        <p className = "name">{ this.props.name }</p>
        <p className = "score">{ this.props.score }</p>
        < PlusButton onClick = {this.handleClick} id = {this.props.id}/>
      </li>
    )
  }
}
