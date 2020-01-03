import React from 'react';

import Button from '~/components/Button';
import Table from '~/components/Table';
import { usePlans } from '~/hooks/plans.hook';

import { Container, TopHeader, Card } from './styles';

export default function Plans({ history }) {
  const students = usePlans();

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
          <button type="button" onClick={() => handleDelete(row.original)}>
            apagar
          </button>
        </div>
      ),
    },
  ];

  function handleNew() {
    history.push(`plans/new`);
  }

  function handleEdit(id) {
    console.tron.log(id);
  }

  function handleDelete(id) {
    console.tron.log(id);
  }

  return (
    <Container>
      <TopHeader>
        <h2>Gerenciando planos</h2>
        <div>
          <Button width={142} height={36} color="#EE4D64" onClick={handleNew}>
            CADASTRAR
          </Button>
        </div>
      </TopHeader>
      <Card>
        <Table columns={columns} data={students} />
      </Card>
    </Container>
  );
}
