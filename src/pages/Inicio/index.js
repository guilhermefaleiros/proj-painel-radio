import React from 'react';
import { useSelector } from 'react-redux';

import { 
  Container, 
  Title, 
  Card, 
  RowCards, 
  CardTitle, 
  CardSubtitle, 
  Number 
} from './styles';

export default function Inicio() {

  const items = useSelector(item => item.order.orders);

  return (
    <Container>
      <Title>Rádio Level 5</Title>
      <RowCards>
        <Card>
          <CardTitle>
            Pedidos
          </CardTitle>
          <CardSubtitle>
            Novos
          </CardSubtitle>
          <Number>
            {items.filter(item => item.read === false).length}
          </Number>
          <CardSubtitle>
            Novos
          </CardSubtitle>
          <Number>
          {items.filter(item => item.read === false).length}
          </Number>
        </Card>
        <Card>
        <CardTitle>
            Pedidos
          </CardTitle>
          <CardSubtitle>
            Novos
          </CardSubtitle>
          <Number>
          {items.filter(item => item.read === false).length}
          </Number>
          <CardSubtitle>
            Novos
          </CardSubtitle>
          <Number>
          {items.filter(item => item.read === false).length}
          </Number>
        </Card>
      </RowCards>
    </Container>
  );
}
