import React from 'react'
import styled from 'styled-components'
import * as PropTypes from 'prop-types';
import Button from '../Button/Button'

const StyledTextLink = styled(Button)`
  font-size: ${(props) => props.fontSize};
  background: transparent;
  color: palevioletred;
  padding: 0.25em 1em;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
`;

const StyledText = styled(Button)`
  background: palevioletred;
  color: white;
  padding: 0.25em 1em;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  :focus {
      outline:0;
    }
`;

const TextLink = ({
  isLink, children, onClick,
}) => (isLink
  ? (
    <StyledTextLink onClick={onClick}>
      {children}
    </StyledTextLink>
  )
  : (
    <StyledText>
      {children}
    </StyledText>
  )
)

TextLink.displayName = 'TextLink'

TextLink.propTypes = {
  children: PropTypes.node.isRequired,
  isLink: PropTypes.bool,
  onClick: PropTypes.func,
}

TextLink.defaultProps = {
  isLink: false,
  onClick: null,
}

export default TextLink
