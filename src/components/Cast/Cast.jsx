import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { getCastByID } from '../../services/fetchAPI';
import { useParams } from 'react-router-dom';

import { Container, Actor } from './Cast.styled';

const IMG = `https://cdn.pixabay.com/photo/2021/12/29/17/34/girl-6902365_1280.png`;

const Cast = ({ state }) => {
  const { id } = useParams();
  const [castInfo, setCastInfo] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        getCastByID(id).then(data => setCastInfo(data.cast));
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [castInfo, id]);

  return (
    <Container>
      {castInfo.length > 0
        ? castInfo.map(({ id, profile_path, original_name, character }) => (
            <Actor key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : `${IMG}`
                }
                alt={original_name}
                width="100px"
              />
              <p>{original_name}</p>
              <p>Character: {character}</p>
            </Actor>
          ))
        : `Sorry! There is no Info about the cast here at this moment. try again Later`}
    </Container>
  );
};

Cast.propTypes = {
  state: PropTypes.object,
};

export default Cast;
