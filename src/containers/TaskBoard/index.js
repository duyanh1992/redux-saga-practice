import React, { Component } from 'react';
import { Add } from '@material-ui/icons';
import TaskList from '../../components/TaskList/index';
import TaskForm from '../../components/TaskForm/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from './../../actions/task';
import {
	Button,
	Grid,
} from '@material-ui/core';

class TaskBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openDialog: false
		};

		this.setItem = this.setItem.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	componentDidMount() {
		const { taskAct } = this.props;
		const { fetchTaskFirst } = taskAct;

		fetchTaskFirst();
	}

	setItem(name, value) {
		this.setState({
			[name]: value
		});
	}

	openModal() {
		this.setItem('openDialog', true);
	}

	closeModal() {
		this.setItem('openDialog', false);
	}

	render() {
		const { openDialog } = this.state;
		const { tasks } = this.props;

		if (tasks.length > 0) {
			return (
				<div className="main">
					<Button onClick={this.openModal} variant="contained" color="primary">
						<Add /> add new task
					</Button>

					<Grid container spacing={3}>
	          			<TaskList tasks={tasks} />
					</Grid>

					<TaskForm openDialog={openDialog} closeModal={this.closeModal} />
				</div>
			);
		}

		return '';
	}
}

const mapStateToProps = state => {
	return {
		tasks: state.task.list
	};
};

const mapDispatchToProps = dispatch => {
	return {
		taskAct: bindActionCreators(taskActions, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskBoard);
