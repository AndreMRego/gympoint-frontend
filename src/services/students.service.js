import { toast } from 'react-toastify';

import history from '~/services/history';

import api from './api';

const ENDPOINT = 'students';

export const findAll = async () => {
  try {
    const { data } = await api.get(ENDPOINT);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const update = async ({ id, student }) => {
  try {
    const response = await api.put(`ENDPOINT/${id}`, {
      student,
    });

    if (response.status) {
      toast.success('Aluno atualizado com sucesso!');
      history.push('/students');
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteById = async ({ id }) => {
  try {
    const response = await api.delete(`ENDPOINT/${id}`);

    if (response.status) {
      toast.success('Registro apagado com sucesso!');
      history.push('/students');
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
