import React from 'react'
import { ContentInput, Input, Label } from './InputLoginStyled'

const InputLogin = ({id, name, content}) => {
  return (
    <ContentInput>
        <Label htmlFor={id} >
            {content}
        </Label>
        <Input type={name} id={id} name={name} />
    </ContentInput>
  )
}

export default InputLogin