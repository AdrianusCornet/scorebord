import React, { Component } from 'react'
import Player from './Player'

const players = [
  {
    id: 1,
    name: 'P a',
    score: 2
  },
  {
    id: 2,
    name: 'P b',
    score: 5
  },
  {
    id: 3,
    name: 'P c',
    score: 4
  }
]


export default class Scoreboard extends Component {
  renderPlayer(player) {
    return < Player
      name={player.name}
      score={player.score}
      key={player.id}
    />
  }
  
  render() {
    return (
      <div className='scorebord'>
        <h1>Scoreboard</h1>
        <ul>
          {
            players
              .sort((a, b) =>  b.score - a.score)
              .map(this.renderPlayer)
          }
        </ul>
      </div>
    )
  }
}
