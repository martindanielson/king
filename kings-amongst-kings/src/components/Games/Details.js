import React, { useContext, memo } from "react";
import styled from "styled-components";

import { GameStateContext } from "./";

const Popup = styled.div`
  display: grid;
  justify-content: center;
  position: fixed;
  bottom: -15px;
  left: 0;
  height: ${({ short }) => (short ? "35vh" : "0")};
  width: 100vw;

  transition: .5s ease;
  overflow: hidden;

  border-top: 15px solid rgb(247, 191, 0);
  //box-sizing: border-box;

  &:before {
    z-index: -1;
    position: absolute;
    display: block;
    top: -50px;
    left: -50px;
    content: "";
    width: calc(100vw + 100px);
    height: calc(35vh + 100px);
    background: black url("//picsum.photos/seed/${({ short }) =>
      short}/764/260.jpg") center/auto calc(35vh + 100px) no-repeat;
    filter: blur(20px) brightness(30%);
    transition-duration: 0;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  width: 500px;
  justify-self: center;
  padding-top: 20px;

  color: white;
`;

const Close = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  padding: 10px 10px;
  border-radius: 5px;
  cursor: pointer;

  background: white;
  border: 3px solid rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  margin: 0;
`;

const Link = styled.a`
  color: white;
`;

const Details = ({ name, short, url, added }) => {
  const { clearGame } = useContext(GameStateContext);

  return (
    <Popup {...{ short }}>
      <Container>
        <img alt={name} src={`//picsum.photos/seed/${short}/170/80`} />
        <div>
          <Title>
            {added && (
              <span role="img" aria-label="Added">
                ⭐
              </span>
            )}{" "}
            {name}
          </Title>
          <br />
          <Link target="_blank" href={`//king.com/${url}`}>
            Homepage
          </Link>
        </div>
        <Close onClick={clearGame}>
          <span role="img" aria-label="Close">
            ❌
          </span>
        </Close>
      </Container>
    </Popup>
  );
};

export default memo(Details);
