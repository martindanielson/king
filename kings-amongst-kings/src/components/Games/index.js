import React, { Component, createContext } from 'react';
import styled from 'styled-components';

import Games from './Games';
import Details from './Details';

export const GameStateContext = createContext();

const Added = styled.button`
padding: 10px 10px;
border-radius: 5px;
cursor: pointer;
margin: 20px 20px;

background: ${({ added }) => added ? 'rgba(255, 255, 255, .9)' : 'rgba(0, 0, 0, 0.2)'};
color: ${({ added }) => added ? '#555' : '#999'};
white-space: nowrap;
font-weight: bold;
border: 3px solid ${({ added }) => added ? 'rgb(247, 191, 0)' : 'rgba(0, 0, 0, .2)'};
`

const Input = styled.input`
padding: 10px 20px;
border-radius: 5px;
margin: 20px 20px;
width: 300px;

background: white;
border: 3px solid ${({ value }) => value.length ? 'rgb(247, 191, 0)' : 'rgba(0, 0, 0, .2)'};
`;

class View extends Component {
  state = {
    games: [],
    input: '',
    added: false,
    active: null,
    addGame: short =>
      this.setState(({ games }) => ({
        games: games.map(game => game.short === short ? { ...game, added: true } : game),
      })),
    viewGame: short =>
      this.setState({ active: short }),
    clearGame: () =>
      this.setState({ active: null }),
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:12345/games.json');
    const { games } = await response.json();
    console.log('WHERE\'S MY CAR?!?!?', games)
    this.setState({ games });
  }

  handleAddedFilter = () =>
    this.setState(state => ({ added: !state.added }));

  handleInputFilter = (e) =>
    this.setState({ input: e.target.value });

  render() {
    const { games: complete, input, added, active } = this.state;

    const games = complete
      .filter(game => !added || game.added)
      .filter(game => game.name.toLowerCase().includes(input.toLowerCase()));

    const game = complete
      .find(game => game.short === active);

    return (
      <GameStateContext.Provider value={this.state}>
        <Added onClick={this.handleAddedFilter} {...{ added }}>Show only added</Added>
        <Input type="text" value={input} onChange={this.handleInputFilter} />
        <Games {...{ games }} />
        <Details {...game} />
      </GameStateContext.Provider>
    );
  }
}

export default View;
