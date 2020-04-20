import styled, {keyframes} from 'styled-components';
import BaseAnimation from '../../components/BaseAnimationComponent';

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const FadeIn = styled(BaseAnimation)`
  animation-name: ${FadeInAnimation};
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  color: ${props => props.selected ? '#fff' : 'rgb(35, 223, 150)' };
  font-weight: bold;
  border:0;
  width: 140px;
  height: 30px;
  border-radius: 5px;
  background-color: ${props => props.selected ? 'rgb(67, 111, 120);' : '#fff' };
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;

  &:hover{
    background: rgb(67, 111, 120);
    transition: 0.5s;
    color: #fff;
  }
`

