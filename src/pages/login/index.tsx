import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';

import { Container, Content, Footer } from './styles';

import { Form } from '@unform/web';

import Logo from '../../images/BIGlogo.svg';
import Input from '../../components/Input';
import { FormHandles } from '@unform/core';
import { FiLock, FiMail } from 'react-icons/fi';
import { useAuth } from '../../hooks/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';

interface ISignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { signIn } = useAuth();

  const handleSubmit = useCallback(async (data: ISignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail é obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
        .required('Senha obrigatória')
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      signIn({
        email: data.email,
        password: data.password,
      });

      history.push('/dashboard');

    } catch(err) {
      if(err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
  }, [signIn, history]);

  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo"/>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input 
            icon={FiMail}
            name="email" 
            type="text" 
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