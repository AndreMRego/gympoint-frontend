import { useState, useEffect } from 'react';

import { parseISO } from 'date-fns';

import { findById } from '~/services/registrations.service';
import { formatPrice } from '~/utils/format';

/**
 * Function is responsible for get one registration
 *
 * @param {Function} setRegistration
 * @param {Number} id
 */

const fetchRegistration = async ({ setRegistration, id }) => {
  try {
    const data = await findById({ id });

    const dataFormatted = {
      id: data.id,
      start_date: parseISO(data.start_date),
      end_date: parseISO(data.end_date),
      price: formatPrice(data.price),
      plan_id: data.plan_id,
      student: data.Student,
      plan: { id: data.Plan.id, name: data.Plan.title, ...data.Plan },
    };
    return setRegistration(dataFormatted);
  } catch (error) {}
};

/**
 * this hook is responsible for fetch registration and set on state
 */

export function useRegistration({ id }) {
  const [registration, setRegistration] = useState({});

  useEffect(() => {
    fetchRegistration({ setRegistration, id });
  }, [id]);

  return [registration, setRegistration];
}
