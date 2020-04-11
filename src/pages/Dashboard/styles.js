import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background: linear-gradient(0deg, rgb(34, 165, 213) 0%, rgb(35, 223, 150) 96%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: row;
  padding: 45px 30px;
`;

export const MenuItem = styled.button`
  width: 200px;
  height: 40px;
  background-color: transparent;
  border:0;
  color: #fff;
  font-size: 25px;
  padding-bottom: 10px;
  border-bottom: ${props => props.selected ? '2px solid rgb(34, 165, 213)' : '2px solid #fff' };
  
  &:hover{
    transition: 0.5s;
    border-bottom:2px solid rgb(34, 165, 213);
  }
`;