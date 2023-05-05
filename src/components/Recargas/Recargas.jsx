import React, { useState } from 'react'
import { ContactContainer, Img, ImgContainer, RecargasContainer, TitleConsult, Title } from './recargasStyled'
import Imagenes from '../assets/imagenes'
import { Formik } from 'formik'
import { recargasInitialValues } from '../../formik/initialValues'
import { recargasValidationSchema } from '../../formik/validationSchema'
import FormInputs from './FormInputsRecargas/FormInputs'

const Recargas = () => {

  const [ value, setValue ] = useState("")

  return (
    <>
      <RecargasContainer id='recarga'>
        <ContactContainer>
          <Title>
            <TitleConsult>
              Dejá tu consulta junto con tus datos
            </TitleConsult>
            <TitleConsult>
              para realizar la recarga anual!
            </TitleConsult>
          </Title>
          
          <Formik
            initialValues={recargasInitialValues}
            validationSchema={recargasValidationSchema}
            onSubmit={async () => {
              await new Promise((r) => setTimeout(r, 500));
              alert("Tu consulta se ha enviado con éxito");
              setValue("")
            }}
          >
            <FormInputs value={value} />
          </Formik>

        </ContactContainer>

        <ImgContainer>
          <Img src={Imagenes.recarga} />
        </ImgContainer>

      </RecargasContainer>
    </>
  )
}

export default Recargas