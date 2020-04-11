import React from 'react';

import { Container, Card, Title, Subtitle, Input, Button } from './styles';
import { Link } from 'react-router-dom';

export default function pages() {
  return (
    <Container>
      <Card>
        <Title>Bem vindo à Rádio Level 5,</Title>
        <Subtitle>acesse para continuar.</Subtitle>
        <Input placeholder="Usuário"/>
        <Input style={{marginTop: 20}} placeholder="Senha"/>
        <Link to="/dashboard">
          <Button>
            Acessar
          </Button>
        </Link>
        
      </Card>
    </Container>
  );
}
