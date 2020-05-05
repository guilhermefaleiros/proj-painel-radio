import styled, {keyframes} from 'styled-components';

import { Form, Input, Textarea } from '@rocketseat/unform';

import { KeyboardDatePicker } from '@material-ui/pickers';

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
`;

export const ContainerForm = styled(Form)`
  width: 800px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  padding: 10px;

  span{
    color: #F64C75;
    margin-top: 10px;
    font-weight: bold;
  }
`;

export const Datepicker = styled(KeyboardDatePicker)`
  width: 200px !important;
  background-color: #fff;
  padding: 10px !important;
  border-radius: 5px;
  margin-top: 0px !important;
  input{
    border-bottom: 0 !important;
  }

  span{
    margin: 0 !important;
    color: #000 !important;
  }
  
`;

export const LabelForm = styled.label`
 
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
  `

export const InputForm = styled(Input)`
  width: ${props => props.widthSize};
  height: 50px;
  background-color: #fff;
  border: 0;
  border-radius: 5px;
  padding: 10px;
  font-size: 17px;
`;

export const DescriptionField = styled(Textarea)`
  width: 100%;
  border: 0;
  border-radius: 5px;
  padding: 10px;
  font-size: 17px;
  background-color: #fff;
  margin-top: 5px;
`;

export const SaveButton = styled.button`
  width: 350px;
  height: 50px;
  border-radius: 5px;
  background-color: rgb(35, 223, 150);
  border: 0;
  align-self: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0px;
`;
