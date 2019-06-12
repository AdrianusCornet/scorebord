import React, { Component } from 'react'
import Player from './Player'


export default class Scoreboard extends Component {
  render() {
    return (
      <div className='scorebord'>
        <h1>Scoreboard</h1>
        <ul>
          < Player name='Name a' score={0} />
          < Player name='Name b' score={1} />
          < Player name='Name c' score={2} />
        </ul>
      </div>
    )
  }
}
