import React from 'react';
import styled from 'styled-components';

import Games from '../Games';

const Container = styled.div`
display: grid;
width: 100vw;
height: 100vh;
background: linear-gradient(125deg, #0a1b1a, #342961 100%);
grid-template-columns: 1fr;
justify-content: center;
overflow-y: scroll;
@media (min-width: 700px) {
  grid-template-columns: 800px;
}
`;

const View = () => (
  <Container>
    <div><Games /></div>
  </Container>
);

export default View;
