import styled from '@emotion/styled';

export const Button = styled.button`
  width: 130px;
  height: 40px;
  color: white;
  border-radius: 10px;
  border: 2px solid black;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  overflow: hidden;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
