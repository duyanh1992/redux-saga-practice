import React, { Component } from 'react';
import { Add } from '@material-ui/icons';
import { Button, Grid } from '@material-ui/core';
import { titles } from '../constants/titles';

class TaskBoard extends Component {
	renderLayoutBlocks() {
		return (
			titles.map((title, index) => (
				<Grid item md={4} key={index}>
					<b>{title.label}</b>
				</Grid>
				)
			)
		)
	}

	render() {
		return (
			<div className="main">
				<Button variant="contained" color="primary">
					<Add /> add new task
				</Button>

				<Grid container spacing={3}>
					{this.renderLayoutBlocks()}
				</Grid>
			</div>
		);
	}
}

export default TaskBoard;