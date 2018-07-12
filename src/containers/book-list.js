import React from 'react'
import { connect } from 'react-redux'
import { select_book } from '../actions/index'

class BookList extends React.Component {
  render() {
    const { books, select_book } = this.props

    const BookList = () => books.map(book =>
      <button
        onClick={ () => select_book(book) }
        key={ book.title }
        className="list-group-item list-group-item-action">
        { book.title }
      </button>
    )
    
    return (
      <div className="list-group-flush col-sm-4">
        <BookList />
      </div>
    )
  }
}

// Anthing returned will be props in the container
const mapStateToProps = state => ({
  books: state.books,
})

// Promote from component to container
export default connect(mapStateToProps, { select_book })(BookList)