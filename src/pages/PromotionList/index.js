import React, { useState } from 'react';

import { Container, FadeIn, Content } from './styles';
import PromotionItem from '../../components/PromotionItem';

export default function PromotionList() {

  const [editMode, setEditMode] = useState(true);

  return (
    <FadeIn duration="0.8s" delay="0.2s" >
      <Container>
        { editMode ?
        (<Content>
          <PromotionItem data={{}} />
          <PromotionItem data={{}} />
          <PromotionItem data={{}} />
        </Content>) : <div>Oi</div>
        }
      </Container>
    </FadeIn>
    
  );
}
