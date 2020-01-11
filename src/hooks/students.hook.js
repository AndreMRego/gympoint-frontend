import { useState, useEffect } from 'react';

import { findAll } from '~/services/students.service';

/**
 * Function is responsible for get all students
 *
 * @param {Function} setStudents
 */

const fetchStudents = async ({ query, setStudents }) => {
  try {
    const data = await findAll({ query });

    return setStudents(data);
  } catch (error) {}
};

/**
 * this hook is responsible for fetch students and set on state
 */

export function useStudents({ query }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents({ query, setStudents });
  }, [query]);

  return [students, setStudents];
}
