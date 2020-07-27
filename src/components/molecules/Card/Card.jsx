import React from 'react'
import styled from 'styled-components'
import * as PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button'
import Flex from '../../atoms/Flex/Flex'
import Text from '../../atoms/Text/Text'
import TextLink from '../../atoms/TextLink/TextLink'

const StyledCard = styled.div`
    border: black solid;
    padding: 5px;
    margin: 10px;
    text-align: center;
`

const Card = ({
  item,
  handleSave,
  isSaved,
}) => {
  const onClick = () => {
    handleSave(item, isSaved)
  }
  const {
    name,
    authors,
    downloads,
    info,
    project_uri: projectUri,
    documentation_uri: documentationUri,
    homepage_uri: homepageUri,
  } = item

  return (
    <StyledCard>
      <Flex>
        <TextLink isLink={!!projectUri} fontSize="20px" onClick={() => window.open(projectUri, '_blank')}>{name}</TextLink>
        <TextLink isLink={!!documentationUri} fontSize="20px" onClick={() => window.open(documentationUri, '_blank')}>documentation</TextLink>
        <TextLink isLink={!!homepageUri} fontSize="14px" onClick={() => window.open(homepageUri, '_blank')}>github</TextLink>
      </Flex>
      <Text>
        by
        {' '}
        {authors}
      </Text>
      <Flex>
        <Text padding="25px">{info}</Text>
      </Flex>
      <Text>
        {downloads}
        {' '}
        downloads
      </Text>
      <Flex justifyContent="flex-end">
        <Button onClick={onClick} solid={isSaved}>{isSaved ? 'unsave' : 'save'}</Button>
      </Flex>
    </StyledCard>
  )
}

Card.displayName = 'Card'

Card.propTypes = {
  item: PropTypes.shape({
    authors: PropTypes.string,
    name: PropTypes.string,
    projectUri: PropTypes.string,
    homepage_uri: PropTypes.string,
    documentation_uri: PropTypes.string,
    downloads: PropTypes.number,
    project_uri: PropTypes.string,
    info: PropTypes.string,
  }).isRequired,
  handleSave: PropTypes.func.isRequired,
  isSaved: PropTypes.bool.isRequired,
}

export default Card
