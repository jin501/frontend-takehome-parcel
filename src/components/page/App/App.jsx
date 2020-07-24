import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Flex from '../../atoms/Flex/Flex'
import Header from '../../molecules/Header/Header'
import Modal from '../../molecules/Modal/Modal'
import Card from '../../molecules/Card/Card'
import SearchBar from '../../molecules/SearchBar/SearchBar'

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 70%;
  background-color: floralwhite;
`

const App = () => {
  const [response, setResponse] = useState([])
  const [savedGems, setSavedGems] = useState(JSON.parse(localStorage.getItem('savedGems')) || [])
  const [isModalOpen, setIsModalOpen] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    localStorage.setItem('savedGems', JSON.stringify(savedGems));
  }, [savedGems]);

  const handleFetch = (value) => {
    setError(null)
    if (value === '') {
      setError('enter a value')
      return
    }
    setIsLoading(true)
    fetch(`http://localhost:3000/api/v1/search.json?query=${value}`)
      .then((resp) => resp.json())
      .then((data) => {
        setResponse(data)
        if (data.length === 0) {
          setError('nothing found, please try again')
        }
        setIsLoading(false)
      })
  }

  const handleSave = (item, isSaved) => {
    if (isSaved) {
      const updated = savedGems.filter((savedGem) => savedGem.sha !== item.sha)
      setSavedGems([...updated])
    } else {
      setSavedGems([...savedGems, item])
    }
  }

  const openModal = () => {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    setIsModalOpen(true)
  }
  const closeModal = () => {
    document.getElementsByTagName('body')[0].style.overflow = 'unset'
    setIsModalOpen(false)
  }

  const checkIfSaved = (item) => {
    if (savedGems.some((gem) => gem.sha === item.sha)) {
      return true
    }
    return false
  }

  const displayCards = (gems) => {
    const arr = []
    arr.push(gems.map((item) => {
      const {
        name,
        authors,
        downloads, info,
        project_uri: projectUri,
        documentation_uri: documentationUri,
        homepage_uri: homepageUri,
      } = item

      return (
        <Card
          key={projectUri}
          info={info}
          name={name}
          authors={authors}
          documentationUri={documentationUri}
          projectUri={projectUri}
          homepageUri={homepageUri}
          downloads={downloads}
          handleSave={handleSave}
          item={item}
          isSaved={checkIfSaved(item)}
        />
      )
    }))
    return arr
  }

  return (
    <Container>
      <Header
        subText={(savedGems.length > 0) ? 'view saved gems' : 'search a gem to start collection..'}
        handleClick={openModal}
        headerText="Ruby Gems"
        border="black solid"
        isLink={!!savedGems.length > 0}
      />
      {isModalOpen
      && (
      <Modal
        onClose={closeModal}
        body={displayCards(savedGems)}
        header={(
          <Header
            headerText="Saved Gems"
            subText={savedGems.length > 0 ? 'what a nice collection you have!' : 'Save a searched gem to start a collection'}
          />
        )}
      />
      )}
      <SearchBar handleFetch={handleFetch} />
      {isLoading && <Flex>searching..</Flex>}
      {error && <Flex>{error}</Flex>}
      {displayCards(response)}
    </Container>
  )
}

export default App
