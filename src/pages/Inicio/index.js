import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listAllOrders } from '../../store/modules/order/actions';
import { listAllPromotions } from '../../store/modules/promotions/actions';
import { 
  Container, 
  Title, 
  Card, 
  RowCards, 
  CardTitle, 
  CardSubtitle, 
  Number,
  FadeIn 
} from './styles';

export default function Inicio() {

  const dispatch = useDispatch();

  useEffect(() => {
    function listAll(){
      dispatch(listAllOrders());
      dispatch(listAllPromotions());
    }
    listAll();
  },[dispatch])

  const items = useSelector(item => item.order.items);

  return (
    <FadeIn  duration="0.8s" delay="0.2s" >
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
    </FadeIn>
  );
}
