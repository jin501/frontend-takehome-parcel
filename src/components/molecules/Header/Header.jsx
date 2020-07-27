import React from 'react'
import * as PropTypes from 'prop-types'
import styled from 'styled-components'
import Text from '../../atoms/Text/Text'
import TextLink from '../../atoms/TextLink/TextLink'

const StyledHeader = styled.div`
    border: ${(props) => props.border};
    padding: 15px;
`

const Header = ({
  handleClick, headerText, isLink, border, subText,
}) => (
  <StyledHeader border={border}>
    <Text fontSize="25px" fontWeight="bold">{headerText}</Text>

    <TextLink isLink={isLink} onClick={handleClick}>{subText}</TextLink>
  </StyledHeader>
)

Header.propTypes = {
  border: PropTypes.string,
  handleClick: PropTypes.func,
  headerText: PropTypes.string.isRequired,
  isLink: PropTypes.bool,
  subText: PropTypes.string.isRequired,
}

Header.defaultProps = {
  border: 'none',
  handleClick: null,
  isLink: false,
}

export default Header
