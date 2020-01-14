import React, { useState } from 'react';
import Modal from 'react-modal';

import { Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import Button from '~/components/Button';
import Table from '~/components/Table';
import { useHelpOrders } from '~/hooks/help-orders.hook';
import { create } from '~/services/help-orders.service';

import { Container, TopHeader, CustomForm } from './styles';

const customStyles = {
  content: {
    top: '25%',
    left: '15%',
    right: 'auto',
    bottom: 'auto',
    margin: '238px 495px',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const schema = Yup.object().shape({
  answer: Yup.string().required('A resposta é obrigatório'),
});

export default function HelpOrders() {
  const [helpOrders, setHelpOrders] = useHelpOrders();
  const [pendingOrder, setPendingOrder] = useState({});
  const [openModal, setOpenModal] = useState(false);

  function handleModal({ id, question }) {
    // console.tron.log(item);
    setPendingOrder({ id, question });
    setOpenModal(!openModal);
  }

  function closeModal() {
    setOpenModal(!openModal);
  }

  async function handleSubmit({ answer }) {
    await create({ id: pendingOrder.id, answer });
    setOpenModal(!openModal);
  }

  const columns = [
    {
      Header: 'ALUNO',
      accessor: 'Student.name',
    },
    {
      Header: '',
      accessor: 'id',
      Cell: ({ row }) => (
        <div>
          <button type="button" onClick={() => handleModal(row.original)}>
            responder
          </button>
        </div>
      ),
    },
  ];

  return (
    <Container>
      <TopHeader>
        <h2>Pedidos de auxílio</h2>
      </TopHeader>

      <Table columns={columns} data={helpOrders} />
      <Modal
        style={customStyles}
        onRequestClose={closeModal}
        isOpen={openModal}
      >
        <CustomForm schema={schema} onSubmit={handleSubmit}>
          <h5>PERGUNTA DO ALUNO</h5>
          <p>{pendingOrder.question}</p>
          <h5>SUA RESPOSTA</h5>
          <Input multiline name="answer" rows="10" />
          <Button type="submit" width={390} height={45} color="#EE4D64">
            Responder aluno
          </Button>
        </CustomForm>
      </Modal>
    </Container>
  );
}
