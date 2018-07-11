import React from 'react'
import { connect } from 'react-redux'

class BookDetail extends React.Component {

  render() {
    const { selectedBook } = this.props
    const Book = () => selectedBook ? selectedBook.title : "No book selected..."

    return (
      <div>
        <Book />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedBook: state.selectedBook
})
export default connect(mapStateToProps)(BookDetail)