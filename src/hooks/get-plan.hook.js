import { useState, useEffect } from 'react';

import { findById } from '~/services/plans.service';

/**
 * Function is responsible for get one plan
 *
 * @param {Function} setPlans
 * @param {Number} id
 */

const fetchPlan = async ({ setPlan, id }) => {
  try {
    const data = await findById({ id });

    return setPlan(data);
  } catch (error) {}
};

/**
 * this hook is responsible for fetch plan and set on state
 */

export function usePlan({ id }) {
  const [plan, setPlan] = useState();

  useEffect(() => {
    fetchPlan({ setPlan, id });
  }, [id]);

  return [plan, setPlan];
}
