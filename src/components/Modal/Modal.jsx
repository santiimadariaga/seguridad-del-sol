import React from 'react'
import { Confirm, ModalBox, ModalContainer } from './modalStyled'

const Modal = ({message}) => {
  return (
    <ModalContainer>
        <ModalBox>
            <Confirm>
                {message}
            </Confirm>
        </ModalBox>
    </ModalContainer>
  )
}

export default Modal