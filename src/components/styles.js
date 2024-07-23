import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 64vh;
margin-top:123px;
  padding: 20px;
  background-color:#06060624;
`;

export const Title = styled.h1`
  color: #a1e4ff;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: bold;
  color:white;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Select = styled.select`
  padding: 10px;
  margin-bottom: 20px;
  width: 320px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: #35e4c757;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Output = styled.div`
  width: 511px;
  background-color: #fff;
  padding: 3px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

