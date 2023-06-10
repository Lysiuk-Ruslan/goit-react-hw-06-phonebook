import { fetchTrending } from 'services/fetchAPI';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Trendings from '../components/Trendings/Trendings';

import { Container, Title } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    async function getTrendings() {
      try {
        fetchTrending().then(data => setTrendingMovies(data.results));
      } catch (error) {
        console.log(error);
      }
    }
    getTrendings();
  }, []);

  return (
    <Container>
      <Title>Trending Today</Title>
      <Trendings trendingMovies={trendingMovies} state={{ from: location }} />
    </Container>
  );
};

export default Home;
