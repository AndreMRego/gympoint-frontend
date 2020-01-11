import { useState, useEffect } from 'react';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { findAll } from '~/services/registrations.service';

/**
 * Function is responsible for get all registrations
 *
 * @param {Function} setRegistrations
 */

const fetchRegistrations = async setRegistrations => {
  try {
    const data = await findAll();

    const dataFormatted = data.map(registration => ({
      ...registration,
      startDateFormatted: format(
        parseISO(registration.start_date),
        "d 'de' MMMM 'de' yyyy",
        {
          locale: pt,
        }
      ),
      endDateFormatted: format(
        parseISO(registration.end_date),
        "d 'de' MMMM 'de' yyyy",
        {
          locale: pt,
        }
      ),
    }));

    return setRegistrations(dataFormatted);
  } catch (error) {}
};

/**
 * this hook is responsible for fetch registrations and set on state
 */

export function useRegistrations() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetchRegistrations(setRegistrations);
  }, []);

  return [registrations, setRegistrations];
}
