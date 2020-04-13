import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listAllOrders } from '../../store/modules/order/actions'
import OrderItem from '../../components/OrderItem';
import OrderItemRead from '../../components/OrderItemRead';
import { Container, Content, FadeIn, ButtonsContainer, Button } from './styles';

export default function Order() {

  const [selected, setSelected] = useState('novos');

  const dispatch = useDispatch();

  useEffect(() => {
    function listAll(){
      dispatch(listAllOrders());
    }

    listAll();
  }, [dispatch, selected]);

  const itemsStore = useSelector(state => state.order.orders);
  console.log(itemsStore);

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
