import React, { useState, useEffect } from 'react';
import Pages from '../../utils/DashboardPagesKey';
import { Switch, Link, Route, Redirect } from 'react-router-dom'
//import Route from '../../routes/Route';
import history from '../../services/history';

import { 
  Container, 
  MenuContainer, 
  MenuItem 
} from './styles';

import Inicio from '../Inicio';
import Order from '../Order';
import Promotion from '../Promotion';

import Teste from '../Teste';

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
          return <Promotion />
        default:
          return (<div>
            <h1>Hello World</h1>
          </div>);
      }
    }
    setActualPage(switchPages);
  }, [selected])

  const handleNavigation = (pageSelected, routeUrl) =>{
    setSelected(pageSelected);
    history.push(routeUrl)
  }

  return (
    <Container>
      <MenuContainer>
        <MenuItem onClick={() => handleNavigation(Pages.INITIAL, '/dashboard')} selected={selected === Pages.INITIAL}>Início</MenuItem>
        <MenuItem  onClick={() => handleNavigation(Pages.REGISTER, '/dashboard/cadastros')} selected={selected === Pages.REGISTER}>Cadastros</MenuItem>
        <MenuItem  onClick={() => handleNavigation(Pages.ORDER, '/dashboard/pedidos')} selected={selected === Pages.ORDER}>Pedidos</MenuItem>
      </MenuContainer>
      <Switch>
        <Route exact component={Inicio} path="/dashboard" /> 
        <Route exact component={Promotion} path="/dashboard/cadastros" />
        <Route exact component={Order} path="/dashboard/pedidos" />
        <Route exact component={Teste} path="/dashboard/cadastros/:id/edit" />
      </Switch>
    </Container>
  );
}
