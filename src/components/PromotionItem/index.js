import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import {removeOrder, setOrderRead } from '../../store/modules/order/actions';

import {
  Container, 
  TextPlace, 
  AuthorDateContainer, 
  Author, 
  Date, 
  TextPrincipal, 
  ButtonsContainer,
  ReadButton,
  DeleteButton,
  ButtonText,
  EditButton,
  ModalWrapper
} from './styles';

import { MdDoneAll, MdDelete, MdEdit } from 'react-icons/md';
import history from '../../services/history';

export default function OrderItem(props) {

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  function handleConfirm(){
    setOpen(false)
  }

  function handleReadItem(){

  }
  
  let date = new window.Date(props.data.createdAt);
  let year = date.getFullYear();
  let month = date.getMonth()+1;
  let dt = date.getDate();
  let minutes;

  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }
  if(date.getMinutes() < 10){
    minutes = '0' + date.getMinutes()
  }
  else{
    minutes = date.getMinutes()
  }

  const day =  dt+'/' + month + '/'+ year;
  const hour = date.getHours() + ":" + minutes;
  

  return (
     <Container>
      <TextPlace>
        <AuthorDateContainer>
          <Author>
            {props.data.title}
          </Author>
          <Date>
            {day + " - " + hour}
          </Date>
        </AuthorDateContainer>
        <TextPrincipal>
        {props.data.description}
        </TextPrincipal>
      </TextPlace>
      <ButtonsContainer>
        <ReadButton onClick={handleReadItem}>
          <MdDoneAll size={15} color="rgb(67, 111, 120)"/>
          <ButtonText>Sortear</ButtonText>
        </ReadButton>
        <EditButton onClick={() => history.push('/dashboard/cadastros/1/edit')}>
          <MdEdit size={15} color="rgb(67, 111, 120)"/>
          <ButtonText>Editar</ButtonText>
        </EditButton>
        <DeleteButton onClick={() => setOpen(true)}>
          <MdDelete size={15} color="#dc3545"/>
          <ButtonText>Excluir</ButtonText>
        </DeleteButton>
      </ButtonsContainer>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <ModalWrapper>
          <DialogTitle style={{color: '#fff'}} id="responsive-dialog-title">{"Deseja realmente excluir esta promoção?"}</DialogTitle>
          <DialogContent>
            <DialogContentText style={{color: '#fff'}}>
              Uma vez excluído, essa promoção não poderá ser recuperada.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button  onClick={() => setOpen(false)}>
              <span style={{color: '#fff'}}>Cancelar</span>
            </Button>
            <Button onClick={handleConfirm}>
            <span style={{color: '#fff'}}>Confirmar</span>
            </Button>
          </DialogActions>
        </ModalWrapper>
      </Dialog>
    </Container>
  );
}
