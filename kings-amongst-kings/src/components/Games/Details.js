import React, { useContext, memo } from 'react';
import styled from 'styled-components';

import { GameStateContext } from './';

const Popup = styled.div`
position: fixed;
bottom: -15px;
left: 0;
height: ${({ short }) => short ? '35vh' : '0'};
width: 100vw;

transition: .5s ease;
overflow: hidden;

border-top: 15px solid rgb(247, 191, 0);
box-sizing: border-box;

&:before {
  z-index: -1;
  position: absolute;
  display: block;
  top: -50px;
  left: -50px;
  content: "";
  width: calc(100vw + 100px);
  height: calc(35vh + 100px);
  background: black url("//picsum.photos/seed/${({ short }) => short}/764/260.jpg") center/auto calc(35vh + 100px) no-repeat;
  filter: blur(20px) brightness(30%);
  transition-duration: 0;
}
`;

const Details = ({ name, short }) => {
  const { clearGame } = useContext(GameStateContext);

  return (
    <Popup {...{ short }}>
      <img alt={name} src={`//picsum.photos/seed/${short}/60/60`} />
      <button onClick={clearGame}>Close</button>
    </Popup>
  );
};

export default memo(Details);
