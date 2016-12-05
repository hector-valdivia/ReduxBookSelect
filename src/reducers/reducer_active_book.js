// El argumento state no es un state de aplicacion, solo es el state
// de este reducer es resposable
export default function( state=null, action ){
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}