import React, { Component } from 'react'
import Player from './Player'

export default class Scoreboard extends Component {
  state ={
    players: [
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
  }
  
  updatePlayers = (id, score) => {
    const updatedPlayers = this.state.players.map(player => {
      if (player.id === id) {
        player.score = score
        return player
      }
      return player
    })
    this.setState({players: updatedPlayers})
  }

  renderPlayer(player) {
    return < Player
      name={player.name}
      score={player.score}
      key={player.id}
      id={player.id}
    />
  }
  
  render() {
    return (
      <div className='scorebord'>
        <h1>Scoreboard</h1>
        <ul>
          {
            this.state.players
              .sort((a, b) =>  b.score - a.score)
              .map(this.renderPlayer)
          }
        </ul>
      </div>
    )
  }
}
