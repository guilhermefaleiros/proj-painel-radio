import styled from 'styled-components';

export const Container = styled.div`
  height:100%;
  width:100%;
  background: linear-gradient(0deg, rgb(34, 165, 213) 0%, rgb(35, 223, 150) 96%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 450px;
  height: 450px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 4px 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 15px;

  &:first-child input{
    margin-bottom: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  letter-spacing: 0px;
  line-height: 1;
  color: rgb(51, 51, 51);
  font-weight: bold;
`;

export const Subtitle = styled.h2`
  margin-top: 10px;
  margin-left: 15px;
  text-align: left;
  font-size: 20px;
  align-self: flex-start;
  color: rgb(51, 51, 51);
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 200px;
  height: 30px;
  border-color: rgb(117, 117, 117);
  border-radius: 0px;
  border-width: 0px 0px 1px;
  padding: 6px 0px 4px;
  border-style: solid;
  margin-top: 20px;
  color: rgb(117, 117, 117);
  font-size: 16px;
`;

export const Button = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 2px;
  padding: 0px 16px;
  background: rgb(35, 223, 150);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 10px 2px;
  color: #fff;
  border:0;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;


