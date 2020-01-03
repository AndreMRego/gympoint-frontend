import { useState, useEffect } from 'react';

import { findAll } from '~/services/plans.service';
import { formatPrice } from '~/utils/format';

/**
 * Function is responsible for get all plans
 *
 * @param {Function} setPlans
 */

const fetchPlans = async setPlans => {
  try {
    const data = await findAll();

    const dataFormatted = data.map(obj => ({
      ...obj,
      formatPrice: formatPrice(obj.price),
      formatDuration:
        obj.duration > 1 ? `${obj.duration} meses` : `${obj.duration} mês`,
    }));
    return setPlans(dataFormatted);
  } catch (error) {}
};

/**
 * this hook is responsible for fetch plans and set on state
 */

export function usePlans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetchPlans(setPlans);
  }, []);

  return plans;
}
