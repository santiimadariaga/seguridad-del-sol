import React from 'react'
import { ContentInput, Input, Label } from './InputLoginStyled'
import { ErrorMessage, Field } from 'formik'
import { ErrorMessageStyled } from '../../Recargas/InputRecargas/inputRecargasStyled'

// const InputLogin = ({id, name, content}) => {
//   return (
//     <ContentInput name={name}>
//       {({ field }) => (
//         <>
//           <Label htmlFor={id} >
//               {content}
//           </Label>
//           <Input type={name} id={id} name={name} />
//           <ErrorMessage name={field.name}>
//             { message => <ErrorMessageStyled> { message } </ErrorMessageStyled> }
//           </ErrorMessage>
//         </>
//       )}

//     </ContentInput>
//   )
// }

export const InputLogin = ({ id, name, content, placeholder }) => {
  return (
      <Field name={name}>
        {({ field }) => (
        <ContentInput>
          <Label htmlFor={id} >
              {content}
          </Label>

          <Input 
            type={name} 
            placeholder={placeholder} 
            {...field}
            />
          <ErrorMessage name={field.name}>
            { message => <ErrorMessageStyled> { message } </ErrorMessageStyled> }
          </ErrorMessage>
        </ContentInput>
        )}
      </Field>
    );
}


export default InputLogin