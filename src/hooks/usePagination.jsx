import { useEffect, useState } from 'react';
import { useFetch } from './useFetch';

const usePagination = () => {
  const [page, setPage] = useState(0);
  const { loading, data } = useFetch();
  const [item, setItem] = useState([]);

  useEffect(() => {
    if (loading) return;
    setItem(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };
  return { prevPage, nextPage, handlePage, item, page };
};

export default usePagination;
