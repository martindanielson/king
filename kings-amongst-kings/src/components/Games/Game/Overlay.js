import styled from 'styled-components';

const Overlay = styled.div`
display: grid;
align-items: center;
justify-items: center;
grid-template-columns: ${({ added }) => added ? 'auto' : 'auto auto'};
position: absolute;
top: 0;
left: 0;
width: 0;
height: 100%;
overflow: hidden;

transition: .5s ease;

background: rgba(255, 255, 255, .6);
`;

export default Overlay;
