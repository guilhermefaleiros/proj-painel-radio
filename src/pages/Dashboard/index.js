import React, { useState, useEffect } from 'react';

import Pages from '../../utils/DashboardPagesKey';

import { 
  Container, 
  MenuContainer, 
  MenuItem 
} from './styles';

import Inicio from '../Inicio';
import Order from '../Order';
import Register from '../Register';

export default function Menu() {
  const [selected, setSelected] = useState(Pages.INITIAL);
  const [actualPage, setActualPage] = useState(null);

  useEffect(() => {
    function switchPages(){
      switch(selected){
        case Pages.INITIAL:
          return <Inicio />
        case Pages.ORDER:
          return <Order />;
        case Pages.REGISTER:
          return <Register />
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
        <MenuItem onClick={() => setSelected(Pages.INITIAL)} selected={selected === Pages.INITIAL}>Início</MenuItem>
        <MenuItem  onClick={() => setSelected(Pages.REGISTER)} selected={selected === Pages.REGISTER}>Cadastros</MenuItem>
        <MenuItem  onClick={() => setSelected(Pages.ORDER)} selected={selected === Pages.ORDER}>Pedidos</MenuItem>
      </MenuContainer>
      {actualPage}
    </Container>
  );
}
