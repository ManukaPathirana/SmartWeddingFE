import { useState, useEffect } from 'react';
import api from '../services/api';

const useApi = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    api.get(endpoint)
      .then((response) => {
        setData(response.data);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setData(null);
      })
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, loading, error };
};

export default useApi;
