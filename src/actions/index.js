const select_book = book => ({
  type: "BOOK_SELECTED",
  payload: book
})

export { select_book }