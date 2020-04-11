import React from 'react';

import { Container, Title, Card, RowCards, CardTitle, CardSubtitle, Number } from './styles';


export default function Inicio() {
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
            0
          </Number>
          <CardSubtitle>
            Novos
          </CardSubtitle>
          <Number>
            0
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
            0
          </Number>
          <CardSubtitle>
            Novos
          </CardSubtitle>
          <Number>
            0
          </Number>
        </Card>
      </RowCards>
    </Container>
  );
}
