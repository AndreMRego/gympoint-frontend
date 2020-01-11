import React, { useState, useMemo } from 'react';

import { Input } from '@rocketseat/unform';
import { addMonths } from 'date-fns';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import Button from '~/components/Button';
import DatePicker from '~/components/DatePicker';
import Form from '~/components/Form';
import ReactSelect from '~/components/ReactSelect';
import { useRegistration } from '~/hooks/get-registration.hook';
import { usePlans } from '~/hooks/plans.hook';
import { useStudents } from '~/hooks/students.hook';
import { formatPrice } from '~/utils/format';

import { Container, TopHeader, Card } from '../styles';

const schema = Yup.object().shape({
  student: Yup.string(),
  plan: Yup.string(),
  start_date: Yup.string(),
  end_date: Yup.string(),
});
export default function RegistrationEdit({ history, match }) {
  const { id } = match.params;
  const [registration, setRegistration] = useRegistration({ id });
  const [query, setQuery] = useState('');
  const [plans] = usePlans();
  const [students] = useStudents({ query });

  const finalPrice = useMemo(
    () =>
      registration.plan &&
      formatPrice(registration.plan.duration * registration.plan.price),
    [registration]
  );

  const endDate = useMemo(
    () =>
      registration.plan &&
      addMonths(registration.start_date, registration.plan.duration),
    [registration]
  );

  function goBack() {
    history.goBack();
  }

  async function handleSubmit({ student, plan, start_date, end_date }) {
    // await update({ id, student: { name, email, nasc_date, weight, height } });
    console.tron.log(student, plan, start_date, end_date);
  }
  return (
    <Container>
      <TopHeader>
        <h2>Edição de matrícula</h2>
        <div>
          <Button width={112} height={36} color="#999999" onClick={goBack}>
            VOLTAR
          </Button>
          <Button
            type="submit"
            form="newRegistration"
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
          initialData={registration}
          id="newRegistration"
          schema={schema}
          onSubmit={handleSubmit}
        >
          <ReactSelect
            label="ALUNO"
            onInputChange={value => setQuery(value)}
            placeholder="Selecione o aluno"
            name="student"
            onChange={item =>
              setRegistration({ ...registration, student: item })
            }
            options={students}
          />

          <div className="row">
            <ReactSelect
              label="PLANO"
              placeholder="Selecione o plano"
              name="plan"
              onChange={item =>
                setRegistration({ ...registration, plan: item })
              }
              options={plans.map(plan => ({
                id: plan.id,
                name: plan.title,
                ...plan,
              }))}
            />

            {registration.start_date && (
              <DatePicker
                label="DATA DE INÍCIO"
                placeholder="Data de início"
                name="start_date"
                onChange={item =>
                  setRegistration({ ...registration, start_date: item })
                }
              />
            )}

            {registration.end_date && (
              <DatePicker
                label="DATA DE TÉRMINO"
                placeholder="Data de término"
                name="end_date"
                value={endDate}
                readOnly
              />
            )}
            <div>
              <Input
                label="VALOR FINAL"
                readOnly
                defaultValue
                value={finalPrice}
                name="price"
              />
            </div>
          </div>
        </Form>
      </Card>
    </Container>
  );
}
RegistrationEdit.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
