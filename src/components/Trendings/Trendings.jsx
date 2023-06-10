import PropTypes from 'prop-types';
import { TrendMovie, Container, FilmLink, Image } from './Trendings.styled';

const IMG = `https://cdn.pixabay.com/photo/2021/12/29/17/34/girl-6902365_1280.png`;

const Trendings = ({ trendingMovies, state }) => {
  return (
    <Container>
      {trendingMovies.map(({ id, title, poster_path }) => (
        <TrendMovie key={id}>
          <FilmLink to={`movies/${id}`} state={state}>
            <Image
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : `${IMG}`
              }
              alt={title}
              width="200"
            />
            <p>{title}</p>
          </FilmLink>
        </TrendMovie>
      ))}
    </Container>
  );
};

Trendings.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
  state: PropTypes.object,
};
export default Trendings;
