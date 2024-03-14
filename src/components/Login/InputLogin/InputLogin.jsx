import React from 'react'
import { ContentInput, Input, Label, ErrorMessageStyled } from './InputLoginStyled'
import { useField } from 'formik'

export const InputLogin = ({ type, name, content }) => {
  const [field, meta] = useField(name);
  const { error, touched } = meta;

  return (
    <ContentInput>
      <Label htmlFor={name}>{content}</Label>
      <Input
        id={name}
        type={type}
        {...field} 
      />
      {touched && error && <ErrorMessageStyled>{error}</ErrorMessageStyled>}
    </ContentInput>
  );
};

export default InputLogin;