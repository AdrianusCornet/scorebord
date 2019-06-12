import React, { Component } from 'react'
import Player from './Player'
import './Scoreboard.css'
import AddPlayer from './AddPlayer'

export default class Scoreboard extends Component {
  state = {
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

  updatePlayers = (id) => {
    const updatedPlayers = this.state.players
      .map(player => {
        if (player.id === id) {
          player.score += 1
        }
        return player
      })
    this.setState({ players: updatedPlayers })
  }
  addPlayer = (name) =>{
    const newPlayer = {
      id: this.state.players.length + 2,
      name,
      score: 0
    }
    this.setState({
      players: this.state.players.concat(newPlayer)
    })
  }

  renderPlayer = (player) => {
    return < Player
      name={player.name}
      score={player.score}
      key={player.id}
      id={player.id}
      updatePlayers={this.updatePlayers}
    />
  }
  render() {
    return (
      <div className='scoreboard'>
        <h1>Scoreboard</h1>
        <ul>
          {
            this.state.players
              .sort((a, b) => b.score - a.score)
              .map(this.renderPlayer)
          }
        </ul>
        <br/>
        <br/>
        < AddPlayer addPlayer={this.addPlayer}/>
      </div>
    )
  }
}
