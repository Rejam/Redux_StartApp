const select_book = book => ({
  type: "BOOK_SELECTED",
  payload: book
})

const deselect_book = () => ({
  type: "CLEARED_BOOK",
})

export default {select_book, deselect_book}