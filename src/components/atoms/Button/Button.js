import styled from 'styled-components'

const Button = styled.button`
  background: ${(props) => (props.solid ? 'palevioletred' : 'transparent')};
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: ${(props) => (props.solid ? 'white' : 'palevioletred')};
  cursor: pointer;
  margin: 0.5em 1em;
  padding: 6px 12px;
  :hover {
    background: palevioletred;
    color: white;
  }
`;

export default Button
