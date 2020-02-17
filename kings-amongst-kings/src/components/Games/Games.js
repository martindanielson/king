import React from 'react';
import styled from 'styled-components';

import Game from './Game';

const Container = styled.div`
  color: red;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  // align-items: center;
`;

const Games = ({ games }) => (
  <Container data-testid="games">
    {games.map(game => <Game {...game} key={game.short} />)}
  </Container>
);

export default Games;
