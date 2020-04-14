import styled, {keyframes} from 'styled-components';
import BaseAnimation from '../../components/BaseAnimationComponent';

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: #fff;
  margin-bottom: 60px;
`;

export const RowCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const FadeIn = styled(BaseAnimation)`
  width: 100%;
  animation-name: ${FadeInAnimation};
`;

export const Card = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 4px 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CardTitle = styled.h1`
  font-size: 32px;
  color: rgb(51, 51, 51);
  font-weight: bold;
`;

export const CardSubtitle = styled.h3`
  margin-top: 10px;
  font-size: 24px;
  color: rgb(51, 51, 51);
`;

export const Number = styled.span`
  font-size: 63px;
  color: rgb(51, 51, 51);
  font-weight: bold;
`;