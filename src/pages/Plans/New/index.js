import React, { useState, useMemo } from 'react';

import { Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import Button from '~/components/Button';
import Form from '~/components/Form';
import { create } from '~/services/plans.service';
import { formatPrice } from '~/utils/format';

import { Container, TopHeader, Card } from '../styles';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  duration: Yup.string().required('A duração é obrigatória'),
  price: Yup.string().required('O preço é obrigatório'),
  finalPrice: Yup.string(),
});

export default function PlanNew({ history }) {
  const [plan, setPlan] = useState({
    duration: 0,
    price: 0,
    finalPrice: 0,
  });

  const finalPrice = useMemo(
    () => plan && formatPrice(plan.duration * plan.price),
    [plan]
  );

  function goBack() {
    history.goBack();
  }

  async function handleSubmit({ title, duration, price }) {
    await create({ title, duration, price });
  }

  return (
    <Container>
      <TopHeader>
        <h2>Cadastro de plano</h2>
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
            form="newPlan"
            width={112}
            height={36}
            color="#EE4D64"
          >
            SALVAR
          </Button>
        </div>
      </TopHeader>
      <Card>
        <Form id="newPlan" schema={schema} onSubmit={handleSubmit}>
          <Input label="TÍTULO DO PLANO" name="title" />
          <div>
            <div>
              <Input
                label="DURAÇÃO (em meses)"
                name="duration"
                onChange={e => setPlan({ ...plan, duration: e.target.value })}
              />
            </div>
            <div>
              <Input
                label="PREÇO MENSAL"
                name="price"
                onChange={e => setPlan({ ...plan, price: e.target.value })}
              />
            </div>
            <div>
              <Input
                label="PREÇO TOTAL"
                readOnly
                name="finalPrice"
                value={finalPrice}
              />
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
