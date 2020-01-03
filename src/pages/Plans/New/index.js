import React from 'react';

import { Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import Button from '~/components/Button';
import Form from '~/components/Form';

import { Container, TopHeader, Card } from '../styles';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function PlanNew({ history }) {
  function goBack() {
    history.goBack();
  }

  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <TopHeader>
        <h2>Cadastro de plano</h2>
        <div>
          <Button width={112} height={36} color="#999999" onClick={goBack}>
            VOLTAR
          </Button>

          <Button
            type="submit"
            width={112}
            height={36}
            color="#EE4D64"
            onClick={() => {}}
          >
            SALVAR
          </Button>
        </div>
      </TopHeader>
      <Card>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input label="TÍTULO DO PLANO" name="title" />
          <div>
            <div>
              <Input label="DURAÇÃO (em meses)" name="duration" />
            </div>
            <div>
              <Input label="PREÇO MENSAL" name="price" />
            </div>
            <div>
              <Input label="PREÇO TOTAL" readOnly name="finalPrice" />
            </div>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

PlanNew.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};
