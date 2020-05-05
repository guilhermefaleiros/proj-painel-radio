import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Container, FadeIn, Content } from './styles';
import PromotionItem from '../../components/PromotionItem';

export default function PromotionList(props) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch()
  })

  return (
    <FadeIn duration="0.8s" delay="0.2s" >
      <Container>
        <Content>
          {props.data.map(item => {
            return <PromotionItem data={item} /> 
          })}
        </Content>
      </Container>
    </FadeIn>
    
  );
}
