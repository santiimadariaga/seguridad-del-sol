import React from 'react'
import { Background, ContainerLogin, ContentLogin } from './LoginPageStyled'
import BoxOne from './BoxOne/BoxOne'
import BoxTwo from './BoxTwo/BoxTwo'

const LoginPage = () => {
  return (
    <ContainerLogin>
        <Background />
        <ContentLogin>
            <BoxOne />
            <BoxTwo />
        </ContentLogin>
    </ContainerLogin>
  )
}

export default LoginPage