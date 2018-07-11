export default function( state = null, action){
  switch(action.type) {
    case "BOOK_SELECTED":
      return action.payload
    case "CLEARED_BOOK":
      return null
    default:
      return state
  }
}