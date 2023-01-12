import { useEffect, useState } from 'react';
import paginate from '../utils/paginate';

const url = 'https://api.spacexdata.com/v3/capsules';
const spaceshipImage =
  'https://images.pexels.com/photos/41005/rocket-launch-rocket-take-off-soyuz-41005.jpeg';

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(url);

      let data = await response.json();
      const alteredResult = data.map((item) => {
        return {
          ...item,
          photoUrl: spaceshipImage,
        };
      });
      setData(paginate(alteredResult));
      setLoading(false);
    } catch (error) {
      throw new Error('An error occur, please try again');
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
};
