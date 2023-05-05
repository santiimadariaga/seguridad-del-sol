import { ErrorMessage, Field } from 'formik';
import React from 'react'
import { ErrorMessageStyled, InputContainerStyled, LoginInputStyled } from './inputRecargasStyled';
import { TextAreaStyled } from '../FormInputsRecargas/formInputsStyled';

export const InputRecargas = ({ name, type, placeholder }) => {
    return (
        <Field name={name}>
          {({ field }) => (
          <InputContainerStyled>
            <LoginInputStyled 
              type={type} 
              placeholder={placeholder} 
              {...field}
              />
            <ErrorMessage name={field.name}>
              { message => <ErrorMessageStyled> { message } </ErrorMessageStyled> }
            </ErrorMessage>
          </InputContainerStyled>
          )}
        </Field>
      );
}

export const TextAreaRecargas = ({ name, placeholder }) => {
  return (
      <Field name={name}>
        {({ field }) => (
        <InputContainerStyled>
          <TextAreaStyled
            placeholder={placeholder} 
            {...field}
            />
          <ErrorMessage name={field.name}>
            { message => <ErrorMessageStyled> { message } </ErrorMessageStyled> }
          </ErrorMessage>
        </InputContainerStyled>
        )}
      </Field>
    );
}