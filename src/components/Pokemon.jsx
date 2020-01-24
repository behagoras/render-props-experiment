import React from 'react';
import styled from 'styled-components';

const Image = styled.img``;
const CardContainer = styled.figure`
  margin: 10px 0px;
  transition: 0.3s;
  border-radius: 5px;
  background: rgba(255, 255, 255, .25);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 5px;
  align-self: center;
  justify-self: center;
  flex-direction: column;
`;

const Info = styled.div`
color: #29335C;
font-weight: bold;
text-align:center;
`;

const Pokemon = ({ src, pokemonNumber, pokemonName }) => (
  <>
    <CardContainer>
      <Image src={src || ''} />
      <Info>
        <div>
          Pokemon #
          {pokemonNumber || ''}
        </div>
        <div>{pokemonName || ''}</div>
      </Info>
    </CardContainer>
  </>
);

export default Pokemon;
