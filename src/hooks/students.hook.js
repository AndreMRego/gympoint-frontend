import { useState, useEffect } from 'react';

import { findAll } from '~/services/students.service';

/**
 * Function is responsible for get all students
 *
 * @param {Function} setStudents
 */

const fetchStudents = async setStudents => {
  try {
    const data = await findAll();

    return setStudents(data);
  } catch (error) {}
};

/**
 * this hook is responsible for fetch students and set on state
 */

export function useStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents(setStudents);
  }, []);

  return students;
}
