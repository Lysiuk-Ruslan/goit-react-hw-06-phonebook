import PropTypes from 'prop-types';
import { Form, Input, SearchBtn } from './Search.styled';

export const SearchForm = ({ onSearch }) => {
  const handelSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const searchValue = form.elements.searchMovie.value;

    if (searchValue.trim() === ``) {
      return;
    }

    onSearch(searchValue);

    // form.reset();  - використати, якщо необхідно очистити інпут
  };

  return (
    <Form action="submit" onSubmit={handelSubmit}>
      <Input type="text" name="searchMovie" placeholder="Search film" />
      <SearchBtn>Search</SearchBtn>
    </Form>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func,
};
