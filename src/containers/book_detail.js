import React from 'react'
import { connect } from 'react-redux'

class BookDetail extends React.Component {

  render() {
    const { book } = this.props
    if (!book) {
      return <div>Select a book to get started.</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: { book.title }</div>
        <div>Author: { book.author }</div>
        <div>Pages: { book.pages }</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  book: state.selectedBook
})
export default connect(mapStateToProps)(BookDetail)