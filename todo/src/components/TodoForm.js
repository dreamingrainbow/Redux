import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { newTodoValue: ''};
		this.addTodo = this.addTodo.bind(this);
		this.updateNewTodo =  this.updateNewTodo.bind(this);
	}
	updateNewTodo(event) {
		this.setState({ newTodoValue: event.target.value });
	}
	addTodo(event) {
		event.preventDefault();
		this.props.addTodo({value:this.state.newTodoValue, completed:false});
		this.setState({newTodoValue: ''});
	}
	render() {
		return (
			<div className="TodoForm">
				<form onSubmit={this.addTodo} >
					<input onChange={this.updateNewTodo} placeholder="new todo" value={this.state.newTodoValue} />
					<button type="submit">Add Todo</button>
				</form>
			</div>
		);
	}
}
const mapStateToProps = state => { return { todos:state.todos }};

export default connect(mapStateToProps)(TodoForm);
