import React from 'react';
import styled from 'styled-components';
import './Person.css';

const StyledDiv = styled.div`
  border: 1px solid rgb(207, 207, 207);
  margin: 0 auto;
  width: 50%;
  box-shadow: 0 2px 2px rgb(80, 80, 80);
  margin-top: 10px;
  padding-bottom: 20px;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  return (
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and i'm {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed} />
    </StyledDiv>
  );
};

export default person;
