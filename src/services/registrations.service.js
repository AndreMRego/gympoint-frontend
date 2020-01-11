import { toast } from 'react-toastify';

import history from '~/services/history';

import api from './api';

const ENDPOINT = 'registrations';

export const findAll = async () => {
  try {
    const { data } = await api.get(`${ENDPOINT}`);

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

export const create = async ({ name, email, nasc_date, weight, height }) => {
  try {
    const response = await api.post(ENDPOINT, {
      name,
      email,
      nasc_date: new Date(nasc_date),
      weight,
      height,
    });

    if (response.status) {
      toast.success('Estudante criado com sucesso!');
      history.push('/students');
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const update = async ({ id, student }) => {
  const { name, email, nasc_date, weight, height } = student;

  try {
    const response = await api.put(`${ENDPOINT}/${id}`, {
      name,
      email,
      nasc_date,
      weight,
      height,
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
    const response = await api.delete(`${ENDPOINT}/${id}`);

    if (response.status) {
      toast.success('Registro apagado com sucesso!');
      history.push('/registrations');
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
