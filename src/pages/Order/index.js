import React, {useState } from 'react';
import { useSelector } from 'react-redux';
import { 
  Container, 
  Content, 
  FadeIn, 
  ButtonsContainer, 
  Button 
} from './styles';

import OrderItemRead from '../../components/OrderItemRead';
import OrderItem from '../../components/OrderItem';

export default function Order() {

  const [selected, setSelected] = useState('novos');

  const itemsStore = useSelector(state => state.order.items);

  return (
    <Container>
      <ButtonsContainer>
        <Button onClick={() => setSelected('novos')} selected={selected === 'novos' ? true : false} >
          Novos
        </Button>
        <Button onClick={() => setSelected('lidos')} selected={selected === 'lidos' ? true: false}>
          Lidos
        </Button>
      </ButtonsContainer>
        <Content>
          <FadeIn duration="0.8s" delay="0.2s" >
            {selected === 'novos' ? itemsStore.filter(item => item.read === false).map(item =>{
              return <OrderItem data={item} />
            })
            :
            itemsStore.filter(item => item.read === true).map(item =>{
              return <OrderItemRead data={item} />
            })
            }
          </FadeIn>
        </Content>
    </Container>
  );
}
