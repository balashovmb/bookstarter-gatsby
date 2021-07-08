import React from 'react';

import Book from './Book';
import {book} from '../../data/data'


class BookContainer extends React.PureComponent {
  render() {
    return (
      <Book isLoading={!book} book={book} />
    )
  }
}

export default BookContainer;
