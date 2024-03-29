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

export const findById = async ({ id }) => {
  try {
    const { data } = await api.get(`${ENDPOINT}/${id}`);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const create = async ({ title, duration, price }) => {
  try {
    const response = await api.post(ENDPOINT, {
      title,
      duration,
      price,
    });

    if (response.status) {
      toast.success('Plano criado com sucesso!');
      history.push('/plans');
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const update = async ({ id, plan }) => {
  try {
    const { title, duration, price } = plan;

    const response = await api.put(`${ENDPOINT}/${id}`, {
      title,
      duration,
      price,
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
    const response = await api.delete(`${ENDPOINT}/${id}`);

    if (response.status) {
      toast.success('Plano apagado com sucesso!');
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
