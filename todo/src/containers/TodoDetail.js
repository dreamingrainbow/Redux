import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoDetail extends Component {
	render() { 
		if(!this.props.todo){ return (<div>Select a Todo</div>); };
		return (<div><h2>{this.props.todo.todo}</h2></div>);
	 }
}

const mapStateToProps = state => { return { todo: state.activeTodo }; };

export default connect(mapStateToProps)(TodoDetail);
