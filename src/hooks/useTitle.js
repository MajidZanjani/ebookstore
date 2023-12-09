import { useEffect } from 'react';

export const useTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} - eBook Store`;
    } else {
      document.title = `eBook Store`;
    }
  }, [title]);

  return null;
};
