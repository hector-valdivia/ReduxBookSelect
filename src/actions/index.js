export function selectBook(book){
  // selectBook es un ActionCreator, y necesita regresar una accion,
  // un objeto con type como propiedad

  return{
    type: 'BOOK_SELECTED',
    payload: book
  };
}