import React, { Component } from 'react';
import BookList from '../containers/book-list'
import BookDetail from '../containers/book_detail'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="my-3">Book App</h1>
        <div className="row">
          <BookList />
          <BookDetail />
        </div>
      </div>
    );
  }
}
