import { useState, useCallback } from 'react';

export const useToggle = (initialStatus: boolean = false): [boolean, any] => {
  const [status, setStatus] = useState(initialStatus);
  const toggleStatus = useCallback(() => setStatus((prevStatus) => !prevStatus), []);
  return [status, toggleStatus];
};
