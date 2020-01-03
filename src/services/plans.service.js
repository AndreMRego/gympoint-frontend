import { toast } from 'react-toastify';

import history from '~/services/history';

import api from './api';

const ENDPOINT = 'plans';

export const findAll = async () => {
  try {
    const { data } = await api.get(ENDPOINT);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const update = async ({ id, plan }) => {
  try {
    const response = await api.put(`ENDPOINT/${id}`, {
      plan,
    });

    if (response.status) {
      toast.success('Plano atualizado com sucesso!');
      history.push('/plans');
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
      toast.success('Plano apagado com sucesso!');
      history.push('/plans');
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
