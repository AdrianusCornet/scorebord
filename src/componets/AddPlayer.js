import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddPlayer extends Component {
  static propTypes = {
    addPlayer: PropTypes.func.isRequired
  }

  state = { name: '' }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.name)
    if (this.state.name) {
      this.props.addPlayer(this.state.name)
      this.setState({name: ''})
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className='add-player'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type='text'
              name='name'
              onChange={this.handleChange}
              value={this.state.name} />
          </label>
          <input type='submit' value='Add' />
        </form>
      </div>
    )
  }
}
