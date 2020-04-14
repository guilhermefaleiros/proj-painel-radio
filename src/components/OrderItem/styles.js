import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  padding: 15px;
  background: #fff;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 4px 1px;
`;

export const Author = styled.h1`
  font-weight: bold;
  font-size: 20px;
  color: rgb(67, 111, 120);
  margin-right: 10px;
`;

export const Date = styled.span`
  color: rgb(67, 111, 120);
  font-size: 16px;
`;

export const TextPlace = styled.div`
  width: 850px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const AuthorDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextPrincipal = styled.p`
  font-size: 14px;
  color: rgb(67, 111, 120);
  margin-top: 5px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
`;

export const ReadButton = styled.button`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid rgb(35, 223, 150);

  &:hover{
    background-color: rgb(35, 223, 150);
    transition: 0.5s;
    span{
      color: #fff;
      transition: 0.5s;
    }

    svg{
      color: #fff !important;
      transition: 0.5s;
    }
  }
`;

export const ButtonText = styled.span`
  font-size: 18px;
  color: rgb(67, 111, 120);
`;

export const ModalWrapper=  styled.div`
  background: linear-gradient(0deg, rgb(34, 165, 213) 0%, rgb(35, 223, 150) 96%);
`;

export const DeleteButton = styled.button`
  margin-top: 10px;
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid #dc3545;

  &:hover{
    background-color:#dc3545;
    transition: 0.5s;
    span{
      color: #fff;
      transition: 0.5s;
    }

    svg{
      color: #fff !important;
      transition: 0.5s;
    }
  }
`;
