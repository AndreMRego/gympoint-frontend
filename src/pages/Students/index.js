import React, { useState } from 'react';

import Button from '~/components/Button';
import Table from '~/components/Table';
import { useStudents } from '~/hooks/students.hook';

import { Container, TopHeader, Card } from './styles';

export default function Students() {
  const [query, setQuery] = useState('');
  const students = useStudents();

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
          <button type="button" onClick={() => handleDelete(row.original)}>
            apagar
          </button>
        </div>
      ),
    },
  ];

  function handleSearch(text) {
    console.tron.log(text);

    setQuery(text);
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
        <h2>Gerenciando alunos</h2>
        <div>
          <Button width={142} height={36} color="#EE4D64">
            CADASTRAR
          </Button>
          <input
            placeholder="Buscar aluno"
            type="text"
            id="search"
            value={query}
            onChange={e => handleSearch(e.target.value)}
          />
        </div>
      </TopHeader>

      <Card>
        <Table columns={columns} data={students} />
      </Card>
    </Container>
  );
}
