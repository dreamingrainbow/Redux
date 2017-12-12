import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTodo, addTodo } from '../actions';
import { bindActionCreators } from 'redux';

class TodoList extends Component {

  renderTodo() {
    return this.props.todos.map((todo, i) => {
      return (
	<li onClick={() => this.props.selectTodo(todo)} key={i} >{todo.todo}</li>
	);
    });
  }

  render(){ return ( <ul>{this.renderTodo}</ul> ); }
}

const mapStateToProps = (state) => {
    return {
	todos: state.todos
    };
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({selectTodo, addTodo}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

