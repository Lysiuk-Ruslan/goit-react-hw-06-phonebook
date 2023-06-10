import { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Loader } from './Loader/Loader';

import { Container, Header, HeaderNav, HeaderLinks, Line } from './App.styled';

const Home = lazy(() => import('../pages/Home'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieInfo = lazy(() => import('./MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <Container>
      <Header>
        <HeaderNav>
          <HeaderLinks to="/" end>
            <div role="img" aria-label="Popcorn"></div> <p>Home</p>
          </HeaderLinks>
          <HeaderLinks to="/movies">Movies</HeaderLinks>
        </HeaderNav>
        <Line />
      </Header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};
