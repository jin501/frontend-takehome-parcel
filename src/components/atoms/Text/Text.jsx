import styled from 'styled-components'

const Text = styled.div`
  cursor: default;
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  margin: ${(props) => props && props.margin};
  padding: ${(props) => props && props.padding};
`;

Text.displayName = 'Text'

export default Text
