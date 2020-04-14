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
  let date = new window.Date(props.data.date);
  let year = date.getFullYear();
  let month = date.getMonth()+1;
  let dt = date.getDate();

  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }

  const day =  dt+'/' + month + '/'+ year;
  const hour = date.getHours() + ":" + date.getMinutes();
  
  return (
    <Container>
      <TextPlace>
        <AuthorDateContainer>
          <Author>
            {props.data.title}
          </Author>
          <Date>
            {day + " - " + hour}
          </Date>
        </AuthorDateContainer>
        <TextPrincipal>
        {props.data.text}
        </TextPrincipal>
      </TextPlace>
    </Container>
  );
}
