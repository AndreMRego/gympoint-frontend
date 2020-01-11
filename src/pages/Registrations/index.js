import React from 'react';

import PropTypes from 'prop-types';

import Button from '~/components/Button';
import Table from '~/components/Table';
import { useRegistrations } from '~/hooks/registrations.hook';
import { deleteById } from '~/services/registrations.service';

import { Container, TopHeader, Card, Status } from './styles';

export default function Registrations({ history }) {
  const [registrations, setRegistrations] = useRegistrations();

  const columns = [
    {
      Header: 'ALUNO',
      accessor: 'Student.name',
    },
    {
      Header: 'PLANO',
      accessor: 'Plan.title',
    },
    {
      Header: 'INÍCIO',
      accessor: 'startDateFormatted',
    },
    {
      Header: 'TÉRMINO',
      accessor: 'endDateFormatted',
    },

    {
      Header: 'ATIVA',
      accessor: 'active',
      Cell: ({ row }) => <Status size={20} status={row.original} />,
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
    history.push(`registrations/new`);
  }

  function handleEdit({ id }) {
    history.push(`registrations/edit/${id}`);
  }

  async function handleDelete({ id }) {
    await deleteById({ id });

    const list = [...registrations];
    const registrationIndex = list.findIndex(
      registration => registration.id === id
    );
    if (registrationIndex >= 0) {
      list.splice(registrationIndex, 1);
      setRegistrations(list);
    }
  }
  return (
    <Container>
      <TopHeader>
        <h2>Gerenciando matrículas</h2>

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
        <Table columns={columns} data={registrations} />
      </Card>
    </Container>
  );
}
Registrations.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
