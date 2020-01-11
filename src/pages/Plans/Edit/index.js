import React, { useMemo } from 'react';

import { Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import Button from '~/components/Button';
import Form from '~/components/Form';
import { usePlan } from '~/hooks/get-plan.hook';
import { update } from '~/services/plans.service';
import { formatPrice } from '~/utils/format';

import { Container, TopHeader, Card } from '../styles';

const schema = Yup.object().shape({
  title: Yup.string(),
  duration: Yup.string(),
  price: Yup.string(),
  finalPrice: Yup.string(),
});
export default function PlanEdit({ history, match }) {
  const { id } = match.params;
  const [plan, setPlan] = usePlan({ id });

  const finalPrice = useMemo(
    () => plan && formatPrice(plan.duration * plan.price),
    [plan]
  );

  function goBack() {
    history.goBack();
  }

  async function handleSubmit(data) {
    await update({ id, plan: data });
  }

  return (
    <Container>
      <TopHeader>
        <h2>Edição de plano</h2>
        <div>
          <Button width={112} height={36} color="#999999" onClick={goBack}>
            VOLTAR
          </Button>

          <Button
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
        <Form
          initialData={plan}
          id="newPlan"
          schema={schema}
          onSubmit={handleSubmit}
        >
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
                value={finalPrice || 0}
              />
            </div>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

PlanEdit.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
