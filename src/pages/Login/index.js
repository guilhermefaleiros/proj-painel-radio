import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { signInRequest} from '../../store/modules/auth/actions';

import { 
  Container, 
  Card, 
  Title, 
  Subtitle, 
  InputField, 
  Button 
} from './styles';

import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup
    .string()
    .email('Insira um email válid')
    .required('O email é obrigatório'),
  password: Yup
    .string()
    .required('A senha é obrigatória')
})

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading)

  function handleSubmit({ email, password}){
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Card schema={schema} onSubmit={handleSubmit}>
        <Title>Bem vindo à Rádio Level 5,</Title>
        <Subtitle>acesse para continuar.</Subtitle>
        <InputField name="email" placeholder="Usuário"/>
        <InputField name="password" style={{marginTop: 20}} placeholder="Senha"/>
        <Button type="submit">
          {loading ? 'Carregando' : 'Acessar'}
        </Button>           
      </Card>
    </Container>
  );
}
