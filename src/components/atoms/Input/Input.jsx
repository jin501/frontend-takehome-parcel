import styled from 'styled-components'

const Input = styled.input`
  text-align: center;
  width: 45%;
  appearance: none;
  border: 0;
  border-top: 1px solid transparent;
  border-bottom: 1px solid black;
  font-family: inherit;
  margin: 0;
  font-size: 22px;
  line-height: 18px;
  padding: 0 0 4px;
  display: block;
  min-width: 0;
  background-color: transparent;
  word-wrap: break-word;
  white-space: normal;
  height: auto;
  :focus {
    outline: 0;
    border-top: 1px solid transparent;
    border-bottom: 2px solid black;
    padding: 0 0 3px;
  }
`

Input.displayName = 'Input'

Input.isField = true

export default Input
