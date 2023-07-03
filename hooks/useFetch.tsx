import { useState, useEffect } from 'react';
import axios from 'axios';

interface DataResponse {
  data: any[];
  total: number;
  limit: number;
  skip: number;
}

export type UsersT = {
  company: { name: string };
  email: string;
  firstName: string;
  id: number;
  image: string;
  lastName: string;
  phone: string;
  domain: string;
};

const useFetch = (url: string, limit: number) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<DataResponse>(url, {
          params: {
            page: currentPage,
            limit: limit,
            skip: (currentPage - 1) * limit,
          },
        });
        const { total } = response.data;
        setData(response.data);
        setTotalItems(total);
        setTotalPage(total / limit);
        setError(null);
      } catch (error) {
        setError('Veriler alınırken bir hata oluştu.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, currentPage]);

  const goToNextPage = () => {
    if (currentPage < Math.ceil(totalItems / 10)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return {
    data,
    isLoading,
    currentPage,
    totalItems,
    error,
    goToNextPage,
    goToPreviousPage,
    totalPage,
  };
};

export default useFetch;
