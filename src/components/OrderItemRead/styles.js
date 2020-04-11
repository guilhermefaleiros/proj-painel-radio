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
  background-color: rgb(255, 175, 175);
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


