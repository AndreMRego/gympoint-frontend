import React from 'react';

import { Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import Button from '~/components/Button';
import DatePicker from '~/components/DatePicker';
import Form from '~/components/Form';
import { useStudent } from '~/hooks/get-student.hook';
import { update } from '~/services/students.service';

import { Container, TopHeader, Card } from '../styles';

const schema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email(),
  nasc_date: Yup.string(),
  weight: Yup.string(),
  height: Yup.string(),
});
export default function StudentEdit({ history, match }) {
  const { id } = match.params;
  const student = useStudent({ id });

  function goBack() {
    history.goBack();
  }

  async function handleSubmit({ name, email, nasc_date, weight, height }) {
    await update({ id, student: { name, email, nasc_date, weight, height } });
  }
  return (
    <Container>
      <TopHeader>
        <h2>Edição de aluno</h2>
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
        <Form
          initialData={student}
          id="newStudent"
          schema={schema}
          onSubmit={handleSubmit}
        >
          <Input label="NOME COMPLETO" name="name" />
          <Input label="ENDEREÇO DE E-MAIL" name="email" />
          <div>
            {student.nasc_date && (
              <DatePicker
                label="DATA DE NASCIMENTO"
                placeholder="Data de nascimento"
                name="nasc_date"
              />
            )}

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

StudentEdit.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
