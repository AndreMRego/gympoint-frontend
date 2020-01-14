import { useState, useEffect } from 'react';

import { findAll } from '~/services/help-orders.service';

/**
 * Function is responsible for get all helpOrders
 *
 * @param {Function} setHelpOrders
 */

const fetchHelpOrders = async setHelpOrders => {
  try {
    const data = await findAll();

    return setHelpOrders(data);
  } catch (error) {}
};

/**
 * this hook is responsible for fetch helpOrders and set on state
 */

export function useHelpOrders() {
  const [helpOrders, setHelpOrders] = useState([]);

  useEffect(() => {
    fetchHelpOrders(setHelpOrders);
  }, []);

  return [helpOrders, setHelpOrders];
}
