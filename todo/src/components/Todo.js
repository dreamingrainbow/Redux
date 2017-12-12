import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTodo } from '../actions';

class Todo extends Component {
	toggleTodo() {
		this.props.selectTodo(this.props.index);
	}
	render(){
		return (
		<li><input type="checkbox" onChange={this.toggleTodo.bind(this)}/>{this.props.todo.value}</li>
		);
	};
}

export default connect(null, {selectTodo})(Todo);
