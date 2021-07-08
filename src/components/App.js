import React from 'react';

import BookContainer from './Book/BookContainer';
import Header from './common/Header'
import Footer from './common/Footer';
import ToTheTopButton from './common/ToTheTopButton'
import {book} from '../data/data'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <h3>Подписаться на книгу</h3>
        <BookContainer book = {book}/>
        <Footer />
        <ToTheTopButton/>
        <div id="modal-root"></div>
      </>
    )
  }
}

export default App;
