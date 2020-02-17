import React, { useContext, memo } from 'react';
import styled from 'styled-components';

import { GameStateContext } from '../';

import Add from './Add';
import View from './View';
import Overlay from './Overlay';
import Cover from './Cover';
import Details from './Details';

const getCoverURL = short =>
  //`http://royal1.midasplayer.com/images/games/${short}/dumps/screen_${short}.gif`
  //`http://royal1.midasplayer.com/images/games/${short}/${short}_60x60.gif`
  //`http://royal1.midasplayer.com/images/games/${short}/${short}_81x46.gif`
  //`http://royal1.midasplayer.com/images/games/${short}/${short}_170x80.gif`
  //`http://royal1.midasplayer.com/images/games/${short}/tournamentPage/${short}_764x260.jpg`
  `//picsum.photos/seed/${short}/764/260`

const Container = styled.div`
position: relative;
border-radius: 5px;
overflow: hidden;

&:hover {
  box-shadow: 0 0 10px 2px rgb(247, 191, 0);
}

&:hover ${Overlay} {
  width: 100%;
}

background: rgba(0, 0, 0, 0.2);
border: 3px solid ${({ added }) => added ? 'rgb(247, 191, 0)' : 'rgba(0, 0, 0, .2)'};
`;

const Game = ({ name, short, added }) => {
  const { addGame, viewGame } = useContext(GameStateContext);

  const handleAdd = short =>
    () => addGame(short);

  const handleView = short =>
    () => viewGame(short);

  return (
    <Container {...{ added }}>
      <Cover alt={name} src={getCoverURL(short)} />
      <Details>{added && <span role="img" aria-label="Added">⭐</span>} {name}</Details>
      <Overlay {...{ added }}>
        <View onClick={handleView(short)}>View game</View>
        {!added && <Add onClick={handleAdd(short)}><span role="img" aria-label="Add">⭐</span></Add>}
      </Overlay>
    </Container>
  );
};

export default memo(Game, (prevProps, nextProps) => {
  // TODO: Check performance (rel Context) https://github.com/facebook/react/issues/15156
  return prevProps.added === nextProps.added;
});
