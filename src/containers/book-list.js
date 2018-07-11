import React from 'react'
import { connect } from 'react-redux'
import { select_book } from '../actions/index'

class BookList extends React.Component {
  render() {
    const { books, select_book } = this.props

    const BookList = () => books.map(book =>
      <li
        onClick={ () => select_book(book) }
        key={ book.title }
        className="book-item list-group-item">
        { book.title }
      </li>
    )
    
    return (
      <ul className="list-group col-sm-4">
        <BookList />
      </ul>
    )
  }
}

// Anthing returned will be props in the container
const mapStateToProps = state => ({
  books: state.books,
})

const mapDispatchToProps = { select_book }

// Promote from component to container
export default connect(mapStateToProps, mapDispatchToProps)(BookList)