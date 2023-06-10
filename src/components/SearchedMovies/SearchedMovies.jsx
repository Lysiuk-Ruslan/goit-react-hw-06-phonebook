import PropTypes from 'prop-types';
import { FilmLink, FilmItem, Image, Container } from './SearchedMovies.styled';

const IMG = `https://cdn.pixabay.com/photo/2021/12/29/17/34/girl-6902365_1280.png`;

export const SearchedMovies = ({ listOFfilms, state }) => {
  return (
    <Container>
      {listOFfilms.map(({ id, title, poster_path }) => (
        <FilmItem key={id}>
          <FilmLink to={`${id}`} state={state}>
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
        </FilmItem>
      ))}
    </Container>
  );
};

SearchedMovies.propTypes = {
  listOFfilms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
  state: PropTypes.object,
};
