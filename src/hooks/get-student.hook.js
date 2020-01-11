import { useState, useEffect } from 'react';

import { parseISO } from 'date-fns';

import { findById } from '~/services/students.service';

/**
 * Function is responsible for get one student
 *
 * @param {Function} setStudent
 * @param {Number} id
 */

const fetchStudent = async ({ setStudent, id }) => {
  try {
    const data = await findById({ id });

    const dataFormatted = {
      ...data,
      nasc_date: parseISO(data.nasc_date),
    };
    return setStudent(dataFormatted);
  } catch (error) {}
};

/**
 * this hook is responsible for fetch student and set on state
 */

export function useStudent({ id }) {
  const [student, setStudent] = useState({});

  useEffect(() => {
    fetchStudent({ setStudent, id });
  }, [id]);

  return student;
}
