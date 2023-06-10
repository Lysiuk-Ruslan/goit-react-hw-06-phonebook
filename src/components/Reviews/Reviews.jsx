import PropTypes from 'prop-types';

import { getReviewsByID } from '../../services/fetchAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ListItem, Container, Author } from './Reviews.styled';

const Reviews = ({ state }) => {
  const { id } = useParams();
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        getReviewsByID(id).then(data => setAllReviews(data.results));
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [allReviews, id]);

  return (
    <Container>
      <h3>{allReviews.length > 0 && `Reviews:`} </h3>
      {allReviews.length > 0
        ? allReviews.map(({ author, content, id }) => (
            <ListItem key={id}>
              <Author>Author: {author}</Author>
              <p>{content}</p>
            </ListItem>
          ))
        : 'There are no reviews here yet. Try again later!'}
    </Container>
  );
};

Reviews.propTypes = {
  state: PropTypes.object,
};

export default Reviews;
