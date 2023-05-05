import React from 'react'
import { Button, ButtonContainer, FieldsContainer, FormStyled } from './formInputsStyled'
import { InputRecargas, TextAreaRecargas } from '../InputRecargas/InputRecargas'

const FormInputs = ({value}) => {

  return (
    <FormStyled>

      <FieldsContainer>
        <InputRecargas value={value} name='name' type='name' placeholder='Nombre completo' />
        <InputRecargas value={value} name='email' type='email' placeholder='Email' />
        <TextAreaRecargas value={value} name='textarea' placeholder="Deja tu consulta por acá!" />
      </FieldsContainer>

      <ButtonContainer>
        <Button>Enviar</Button>
      </ButtonContainer>

    </FormStyled>
  )
}

export default FormInputs