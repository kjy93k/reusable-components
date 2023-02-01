import { useState, useCallback } from 'react';

export const useToggleActiveId = (): [string, (id: string) => void, (id: string) => void] => {
  const [status, setStatus] = useState('');

  const toggleStatus = useCallback(
    (id: string) => setStatus((prevStatus: string) => (prevStatus === id ? '' : id)),
    [],
  );
  const setDefaultActiveId = useCallback((id: string) => setStatus((prevStatus: string) => id), []);

  return [status, toggleStatus, setDefaultActiveId];
};
