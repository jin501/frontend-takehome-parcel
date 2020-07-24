import React, { useEffect, useRef } from 'react'
import * as PropTypes from 'prop-types'
import styled from 'styled-components'

const OpacityBox = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
`
OpacityBox.displayName = 'OpacityBox'

const ModalWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  background-color: white;
  overflow-y: auto;
  min-height: 600px;
  max-height: 540px;
  width: 600px;
  border-radius: 3px;
  box-shadow: 0 15px 15px 0 rgba(0, 0, 0, 0.25), 0 20px 40px 0 rgba(0, 0, 0, 0.25);
  margin: auto;
  z-index: 200;
`
ModalWrapper.displayName = 'Modal'

const ModalHeader = styled.div``
ModalHeader.displayName = 'ModalHeader'

const ModalContent = styled.div``
ModalContent.displayName = 'ModalContent'

const Modal = ({
  header, body, onClose,
}) => {
  const ref = useRef(null)

  const handleEscModal = (event) => {
    if (event.key === 'Escape') {
      onClose()
    }
  }

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscModal, true)
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('keydown', handleEscModal, true)
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return (
    <OpacityBox>
      <ModalWrapper ref={ref}>
        <ModalHeader>{header}</ModalHeader>
        <ModalContent>{body}</ModalContent>
      </ModalWrapper>
    </OpacityBox>
  )
}

Modal.propTypes = {
  body: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Modal
