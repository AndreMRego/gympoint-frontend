import { toast } from 'react-toastify';

import history from '~/services/history';

import api from './api';

const ENDPOINT = 'registrations';

export const findAll = async () => {
  try {
    const { data } = await api.get(`${ENDPOINT}`);

    return data;
  } catch (error) {}
};

export const findById = async ({ id }) => {
  try {
    const { data } = await api.get(`${ENDPOINT}/${id}`);

    return data;
  } catch (error) {}
};

export const create = async ({ student_id, plan_id, start_date }) => {
  try {
    const response = await api.post(ENDPOINT, {
      student_id,
      plan_id,
      start_date: new Date(start_date),
    });

    if (response.status) {
      toast.success('Matrícula criado com sucesso!');
      history.push('/registrations');
    }
  } catch (error) {}
};

export const update = async ({ id, registration }) => {
  const { student_id, plan_id, start_date } = registration;

  try {
    const response = await api.put(`${ENDPOINT}/${id}`, {
      student_id,
      plan_id,
      start_date: new Date(start_date),
    });

    if (response.status) {
      toast.success('Matrícula atualizada com sucesso!');
      history.push('/registrations');
    }
  } catch (error) {}
};

export const deleteById = async ({ id }) => {
  try {
    const response = await api.delete(`${ENDPOINT}/${id}`);

    if (response.status) {
      toast.success('Registro apagado com sucesso!');
      history.push('/registrations');
    }
  } catch (error) {}
};
