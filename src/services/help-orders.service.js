import { toast } from 'react-toastify';

import history from '~/services/history';

import api from './api';

const ENDPOINT = 'help-orders';

export const findAll = async () => {
  try {
    const { data } = await api.get(ENDPOINT);

    return data;
  } catch (error) {}
};

export const create = async ({ id, answer }) => {
  try {
    const response = await api.post(`${ENDPOINT}/${id}/answer`, {
      answer,
    });

    if (response.status) {
      toast.success('Auxílio respondido com sucesso!');
      history.push('/help-orders');
    }
  } catch (error) {}
};
