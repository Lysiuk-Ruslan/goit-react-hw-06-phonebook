import styled from '@emotion/styled';
export const Form = styled.form`
  margin: 20px;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  margin-right: 5px;
  outline: none;
  width: 200px;
  height: 35px;

  :not(:placeholder-shown) {
    line-height: 1.25;
    color: black;
    font-size: 20px;
  }
`;

export const SearchBtn = styled.button`
  height: 40px;
  width: 100px;
  font-size: 20px;
  display: inline-block;
  padding: 5px;
  border-radius: 4px;
  outline: none;
  border: none;
  background-color: teal;
  color: white;

  :hover,
  :focus {
    background-color: darkslategray;
    cursor: pointer;
  }
`;
