import React from 'react'
import { connect } from 'react-redux'
import { select_book } from '../actions/index'
//import { bindActionCreators } from 'redux'

class BookList extends React.Component {
  renderList = () => {
    return this.props.books.map(book =>
      <li
        onClick={() => this.props.select_book(book)}
        key={book.title}
        className="list-group-item">
        {book.title}
      </li>
    )
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
        {this.props.selectedBook.title}
      </ul>
    )
  }
}

// Anthing returned will be props in the container
const mapStateToProps = state => ({
  books: state.books,
  selectedBook: state.selectedBook
})

// function mapDispatchToProps(dispatch) {
//   Whenever select_book is called,
//   the result should be passed to all reducers
//   return bindActionCreators({ select_book }, dispatch)
// }

// Promote from component to container
export default connect(mapStateToProps, { select_book })(BookList)