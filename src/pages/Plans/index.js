import React from 'react';

import PropTypes from 'prop-types';

import Button from '~/components/Button';
import Table from '~/components/Table';
import { usePlans } from '~/hooks/plans.hook';
import { deleteById } from '~/services/plans.service';

import { Container, TopHeader, Card } from './styles';

export default function Plans({ history }) {
  const [plans, setPlans] = usePlans();

  const columns = [
    {
      Header: 'TÍTULO',
      accessor: 'title',
      width: 300,
    },

    {
      Header: 'DURAÇÃO',
      accessor: 'formatDuration',
    },
    {
      Header: 'VALOR p/ MÊS',
      accessor: 'formatPrice',
    },
    {
      Header: '',
      accessor: 'id',
      Cell: ({ row }) => (
        <div>
          <button type="button" onClick={() => handleEdit(row.original)}>
            editar
          </button>
          <button
            type="button"
            onClick={() =>
              window.confirm('Você tem certeza que deseja apagar?') &&
              handleDelete(row.original)
            }
          >
            apagar
          </button>
        </div>
      ),
    },
  ];

  function handleNew() {
    history.push(`plans/new`);
  }

  function handleEdit({ id }) {
    history.push(`plans/edit/${id}`);
    console.tron.log(id);
  }

  async function handleDelete({ id }) {
    await deleteById({ id });

    const list = [...plans];
    const planIndex = list.findIndex(plan => plan.id === id);
    if (planIndex >= 0) {
      list.splice(planIndex, 1);
      setPlans(list);
    }
  }

  return (
    <Container>
      <TopHeader>
        <h2>Gerenciando planos</h2>

        <Button
          icon="MdAdd"
          width={142}
          height={36}
          color="#EE4D64"
          onClick={handleNew}
        >
          CADASTRAR
        </Button>
      </TopHeader>
      <Card>
        <Table columns={columns} data={plans} />
      </Card>
    </Container>
  );
}
Plans.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
