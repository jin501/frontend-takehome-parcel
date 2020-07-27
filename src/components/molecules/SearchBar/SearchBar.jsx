import React, { useEffect, useState } from 'react'
import * as PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import Flex from '../../atoms/Flex/Flex'

const Wrapper = styled(Flex)`
  padding: 15px;
  margin: 15px 0 15px 0;
`

const SearchBar = ({ handleFetch }) => {
  const [value, setValue] = useState('')

  const handleClick = () => {
    handleFetch(value)
    setValue('')
  }

  const handleKeydownSubmit = (event) => {
    if (event.key === 'Enter') {
      setValue(event.target.value)
      handleFetch(event.target.value)
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeydownSubmit, true)
    return () => {
      document.removeEventListener('keydown', handleKeydownSubmit, true)
    }
  }, [])

  return (
    <Wrapper>
      <Input value={value} onChange={handleChange} />
      <Button onClick={handleClick}> Search! </Button>
    </Wrapper>
  )
}
export default SearchBar

SearchBar.propTypes = {
  handleFetch: PropTypes.func.isRequired,
}
