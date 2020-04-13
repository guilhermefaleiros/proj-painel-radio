import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listAllOrders } from '../../store/modules/order/actions';
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

  const dispatch = useDispatch();

  useEffect(() => {
    function listAll(){
      dispatch(listAllOrders());
    }
    listAll();
  },[dispatch])

  const items = useSelector(item => item.order.items);

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
