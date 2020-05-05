import React, {useState } from 'react';
import { Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { 
  Container, 
  Content, 
  ButtonsContainer, 
  Button,
  FadeIn
} from './styles';

import PromotionForm from '../PromotionForm';
import PromotionList from '../PromotionList';

export default function Order() {

  const [selected, setSelected] = useState('new');

  const itemsStore = useSelector(state => state.promotions.items)

  const handleSelected = (key) => {
    setSelected(key)
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <Container>
      <ButtonsContainer>
        <Button onClick={() => handleSelected('new')} selected={selected === 'new' ? true : false} >
          Nova promoção
        </Button>
        <Button onClick={() => handleSelected('finish')} selected={selected === 'finish' ? true: false}>
          Promoções
        </Button>
      </ButtonsContainer>
        <Switch>
          <FadeIn>
            <Content>
              {
                selected === 'new' ? <PromotionForm /> : <PromotionList data={itemsStore} />
              }
            </Content>
          </FadeIn>
        </Switch>
    </Container>
  );
}
