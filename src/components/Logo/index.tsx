import React from 'react';
import { LogoContainer, Container } from './styles';
import logo from './../../images/logo.png'
import Home from '../../pages/Home';

function Logo() {
  return (
    <>
        <a href="/home">
            <Container>
                <LogoContainer src={logo}/>
            </Container>
        </a>
    </>
  );
}

export default Logo;