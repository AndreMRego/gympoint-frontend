import React from 'react';

import { Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import Button from '~/components/Button';
import DatePicker from '~/components/DatePicker';
import Form from '~/components/Form';
import { create } from '~/services/students.service';

import { Container, TopHeader, Card } from '../styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email()
    .required('O E-mail é obrigatório'),
  nasc_date: Yup.string().required('A data de nascimento é obrigatória'),
  weight: Yup.string().required('O peso é obrigatório.'),
  height: Yup.string().required('A altura é obrigatória.'),
});

export default function StudentNew({ history }) {
  function goBack() {
    history.goBack();
  }

  async function handleSubmit({ name, email, nasc_date, weight, height }) {
    await create({ name, email, nasc_date, weight, height });
  }

  return (
    <Container>
      <TopHeader>
        <h2>Cadastro de aluno</h2>
        <div>
          <Button
            icon="MdChevronLeft"
            width={112}
            height={36}
            color="#999999"
            onClick={goBack}
          >
            VOLTAR
          </Button>

          <Button
            icon="MdCheck"
            type="submit"
            form="newStudent"
            width={112}
            height={36}
            color="#EE4D64"
          >
            SALVAR
          </Button>
        </div>
      </TopHeader>
      <Card>
        <Form id="newStudent" schema={schema} onSubmit={handleSubmit}>
          <Input label="NOME COMPLETO" name="name" />
          <Input label="ENDEREÇO DE E-MAIL" name="email" />
          <div>
            <DatePicker maxDate label="DATA DE NASCIMENTO" name="nasc_date" />

            <div>
              <Input label="PESO (em kg)" name="weight" />
            </div>
            <div>
              <Input label="ALTURA" name="height" />
            </div>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

StudentNew.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};
