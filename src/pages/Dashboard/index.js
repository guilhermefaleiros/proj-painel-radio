import React, { useState, useEffect} from 'react';

import { 
  Container, 
  MenuContainer, 
  MenuItem 
} from './styles';

import Inicio from '../Inicio';
import Order from '../Order';

export default function Menu() {
  const [selected, setSelected] = useState('inicio');
  const [actualPage, setActualPage] = useState(null);

  useEffect(() => {
    function switchPages(){
      switch(selected){
        case 'inicio':
          return <Inicio/>
        case 'pedidos':
          return <Order/>;
        default:
          return (<div>
            <h1>Hello World</h1>
          </div>);
      }
    }
    setActualPage(switchPages);
  }, [selected])

  return (
    <Container>
      <MenuContainer>
        <MenuItem onClick={() => setSelected('inicio')} selected={selected === 'inicio' ? true : false}>Início</MenuItem>
        <MenuItem  onClick={() => setSelected('cadastros')} selected={selected === 'cadastros' ? true : false}>Cadastros</MenuItem>
        <MenuItem  onClick={() => setSelected('pedidos')} selected={selected === 'pedidos' ? true : false}>Pedidos</MenuItem>
      </MenuContainer>
      {actualPage}
    </Container>
  );
}
