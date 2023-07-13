import React from 'react'
import { Background, ContainerLogin, ContentLogin } from '../Login/LoginPageStyled'
import BoxOne from '../Login/BoxOne/BoxOne'
import BoxTwo from '../Login/BoxTwo/BoxTwo'

const RegisterPage = () => {
  return (
    <ContainerLogin>
        <Background />
        <ContentLogin>
            <BoxOne register/>
            <BoxTwo register/>
        </ContentLogin>
    </ContainerLogin>
    )
}

export default RegisterPage