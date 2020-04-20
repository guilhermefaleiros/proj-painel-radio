import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

import * as Yup from 'yup';

import { 
  Container, 
  ContainerForm, 
  InputForm, 
  LabelForm, 
  Datepicker, 
  DescriptionField,
  SaveButton
} from './styles';

import api from '../../services/api';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function Register() {

  const schema = Yup.object().shape({
    title: Yup
      .string()
      .required('O campo título é obrigatório'),
    description: Yup
      .string()
      .required('O campo descrição é obrigatório')
  })

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  async function handleSubmit(data){
    
    const { description, title } = data;

    try{
      const response = await api.post('/promotions', {
        title,
        description
      })
      
      if(response){
        toast.success("Promoção salva com sucesso!");
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
      }
    }
    catch(e){
      toast.error("Erro ao salvar a promoção. Tente novamente!");
      return;
    }
  }

  return (
    <Container>
      <ContainerForm schema={schema} onSubmit={handleSubmit}>
        <LabelForm htmlFor="title">Nome da promoção</LabelForm>
        <InputForm name="title" widthSize="600px" id="title" />
        <LabelForm htmlFor="date">Validade da promoção</LabelForm>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Datepicker
            disableToolbar
            name="date"
            variant="inline"
            format="dd/MM/yyyy"
            id="date-picker-inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            style={{backgroundColor: '#fff'}}
            
          />
        </MuiPickersUtilsProvider>
        <LabelForm htmlFor="description">Nome da promoção</LabelForm>
        <DescriptionField name="description" id="description" rows={15} />
        <SaveButton type="submit">Salvar</SaveButton>
      </ContainerForm>
    </Container>
  );
}
