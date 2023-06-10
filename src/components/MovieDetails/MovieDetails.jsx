import { Suspense } from 'react';

import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieByID } from '../../services/fetchAPI';

import {
  Container,
  MainInfo,
  MovieDescripton,
  Line,
  BackButton,
  AdditionalInfoItem,
  AdditionalInfoLink,
  SmallContainer,
} from './MovieDetails.styled';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { TiStarFullOutline } from 'react-icons/ti';
import { BiBody } from 'react-icons/bi';
import { Loader } from 'components/Loader/Loader';

const IMG = `https://cdn.pixabay.com/photo/2021/12/29/17/34/girl-6902365_1280.png`;

const MovieInfo = () => {
  const { id } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const [genres, setGenres] = useState([]);
  const [picture, setPicture] = useState('');
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      try {
        getMovieByID(id).then(data => {
          if (!data) {
            toast.warn(
              'There is no movie with such name. Please Go Back and try another one.',
              {
                theme: 'dark',
              }
            );
            return;
          }
          setMovie(data);
          setGenres(data.genres);
          setPicture(data.poster_path);
        });
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
  }, [id]);

  return (
    <Container>
      <Link to={backLinkHref}>
        <BackButton>Go Back </BackButton>
      </Link>
      {movie ? (
        <>
          <MainInfo>
            <img
              src={
                picture
                  ? `https://image.tmdb.org/t/p/w500/${picture}`
                  : `${IMG}`
              }
              alt={movie.title}
              width="350"
            />
            <MovieDescripton>
              <h1>
                {movie.title}(
                {movie.release_date && movie.release_date.slice(0, 4)})
              </h1>

              <p>User Score: {Math.round(Number(movie.popularity))}% </p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              {genres.length !== 0 &&
                genres.map(gen => (
                  <span key={gen.id}>
                    {' '}
                    <span>{gen.name}</span>
                  </span>
                ))}
            </MovieDescripton>
          </MainInfo>
          <Line />
          <SmallContainer>
            <h3>Additional Information</h3>
            <ul>
              <AdditionalInfoItem>
                <AdditionalInfoLink to="cast" state={location.state}>
                  <BiBody size="16px" /> Cast{' '}
                </AdditionalInfoLink>
              </AdditionalInfoItem>
              <AdditionalInfoItem>
                <AdditionalInfoLink to="reviews" state={location.state}>
                  {' '}
                  <TiStarFullOutline size="16px" /> Reviews{' '}
                </AdditionalInfoLink>
              </AdditionalInfoItem>
            </ul>

            <Line />
          </SmallContainer>
        </>
      ) : (
        <div>
          There is no movie with such name. Please Go Back and try another one.{' '}
        </div>
      )}
      <ToastContainer autoClose={3000} closeOnClick />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieInfo;
