import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Button from '~/components/Button';
import Table from '~/components/Table';
import { useStudents } from '~/hooks/students.hook';
import { deleteById } from '~/services/students.service';

import { Container, TopHeader, Card } from './styles';

export default function Students({ history }) {
  const [query, setQuery] = useState('');
  const [students, setStudents] = useStudents({ query });

  const columns = [
    {
      Header: 'NOME',
      accessor: 'name',
    },

    {
      Header: 'E-MAIL',
      accessor: 'email',
    },
    {
      Header: 'IDADE',
      accessor: 'age',
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
    history.push(`students/new`);
  }

  function handleEdit({ id }) {
    history.push(`students/edit/${id}`);
  }

  async function handleDelete({ id }) {
    await deleteById({ id });

    const list = [...students];
    const studentIndex = list.findIndex(student => student.id === id);
    if (studentIndex >= 0) {
      list.splice(studentIndex, 1);
      setStudents(list);
    }
  }

  return (
    <Container>
      <TopHeader>
        <h2>Gerenciando alunos</h2>
        <div>
          <Button
            icon="MdAdd"
            width={142}
            height={36}
            color="#EE4D64"
            onClick={handleNew}
          >
            CADASTRAR
          </Button>
          <input
            placeholder="Buscar aluno"
            type="text"
            id="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </TopHeader>

      <Card>
        <Table columns={columns} data={students} />
      </Card>
    </Container>
  );
}
Students.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
