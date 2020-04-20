import React, {useState } from 'react';

import { 
  Container, 
  Content, 
  ButtonsContainer, 
  Button 
} from './styles';

import PromotionForm from '../PromotionForm';

export default function Order() {

  const [selected, setSelected] = useState('new');

  return (
    <Container>
      <ButtonsContainer>
        <Button onClick={() => setSelected('new')} selected={selected === 'new' ? true : false} >
          Nova promoção
        </Button>
        <Button onClick={() => setSelected('finish')} selected={selected === 'finish' ? true: false}>
          Promoções
        </Button>
      </ButtonsContainer>
        <Content>
          {
            selected === 'new' ? <PromotionForm/> : <div></div>
          }
        </Content>
    </Container>
  );
}
