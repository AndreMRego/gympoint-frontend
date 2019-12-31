import React from 'react';

import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/images/logo.svg';
import Button from '~/components/Button';
import Form from '~/components/Form';

import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  function handleSubmit({ email, password }) {
    console.tron.log(email, password);
  }
  return (
    <Container>
      <img src={logo} alt="" srcSet="" />
      <h2>GYMPOINT</h2>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          label="SEU E-MAIL"
          name="email"
          type="email"
          placeholder="Digite seu e-mail"
        />
        <Input
          label="SUA SENHA"
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <Button color="#EE4D64" type="submit">
          Entrar no sistema
        </Button>
      </Form>
    </Container>
  );
}
