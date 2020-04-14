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
  ButtonText
} from './styles';

import { MdDoneAll, MdDelete } from 'react-icons/md';

export default function OrderItem(props) {

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  function handleConfirm(){
    setOpen(false)
    dispatch(removeOrder({id: props.data.id}))
  }

  function handleReadItem(){
    dispatch(setOrderRead({id: props.data.id}))
  }

  let date = new window.Date(props.data.date);
  let year = date.getFullYear();
  let month = date.getMonth()+1;
  let dt = date.getDate();

  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }

  const day =  dt+'/' + month + '/'+ year;
  const hour = date.getHours() + ":" + date.getMinutes();
  

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
        {props.data.text}
        </TextPrincipal>
      </TextPlace>
      <ButtonsContainer>
        <ReadButton onClick={handleReadItem}>
          <MdDoneAll size={15} color="rgb(67, 111, 120)"/>
          <ButtonText>Lida</ButtonText>
        </ReadButton>
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
        <DialogTitle id="responsive-dialog-title">{"Deseja realmente excluir este pedido?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Uma vez excluído, esse pedido não poderá ser recuperado.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
