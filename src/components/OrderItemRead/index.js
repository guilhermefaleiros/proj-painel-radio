import React from 'react';

import {
  Container, 
  TextPlace, 
  AuthorDateContainer, 
  Author, 
  Date, 
  TextPrincipal, 
} from './styles';

export default function OrderItem(props) {
  return (
    <Container>
      <TextPlace>
        <AuthorDateContainer>
          <Author>
            {props.data.author}
          </Author>
          <Date>
            {props.data.date}
          </Date>
        </AuthorDateContainer>
        <TextPrincipal>
        {props.data.text}
        </TextPrincipal>
      </TextPlace>
    </Container>
  );
}
