import React from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends React.Component{
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title}
          onClick={() => this.props.selectBook(book)} 
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  return{
    books: state.books
  };
}

// Cualquier cosa que regrese esta funcion terminara como una prop
// en BookList Container
function mapDispatchProps(dispatch){
  // Cuando selectBook se llame, el resultado se enviara a todos
  // los reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promober BookList de componente a un contenedor necesita
// concer acerca del metodo dispatch, asi el selectBook. Sea
// disponible como una propiedad
export default connect(mapStateToProps, mapDispatchProps)(BookList);