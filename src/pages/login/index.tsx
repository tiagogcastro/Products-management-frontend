import React, { useCallback, useRef } from 'react';
import { Container, Content, Footer } from './styles';

import { Form } from '@unform/web';

import Logo from '../../images/BIGlogo.svg';
import Input from '../../components/Input';
import { FormHandles } from '@unform/core';
import { FiLock, FiMail } from 'react-icons/fi';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  // const { signIn } = useAuth();

  const handleSubmit = useCallback(() => {

  }, []);

  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo"/>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input 
            icon={FiMail}
            name="email" 
            type="email" 
            placeholder="E-mail"
          />
          <Input
            icon={FiLock}
            name="password" 
            type="password" 
            placeholder="Senha"
          />
          <button type="submit">Entrar</button>
          <footer>
            <a href="/">Esqueci a senha</a>
            <a href="/">Criar conta</a>
          </footer>
        </Form>
      </Content>
      <Footer>
        <p>&copy; Copyright - Desenvolvido por <a href="https://github.com/Tiaguin061">Tiago Gonçalves</a></p>
      </Footer>
    </Container>
  );
}

export default Login;