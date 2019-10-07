import React, { Component } from 'react';
import { Add } from '@material-ui/icons';
import {
	Button,
	Grid,
	Card,
	CardActions,
	CardContent,
	Typography,
	Box
} from '@material-ui/core';
import { titles } from '../constants/titles';
import { tasks } from '../commons/Data/index';
import { withStyles } from '@material-ui/core';
import styles from '../styles/TaskBoard';

class TaskBoard extends Component {
	renderTasks(value) {
		return (
			tasks.filter(task => task.status === value).map((task, value) => (
				<Box mb={3} key={value}>
					<Card>
						<CardContent>
							<Typography variant="h4">
								{task.title}
							</Typography>

							<p>{task.description}</p>

							<Box display="flex" justifyContent="flex-end">
								<CardActions>
										<Button variant="contained" color="primary">Edit</Button>
										<Button variant="contained" color="secondary">Delete</Button>
								</CardActions>
							</Box>
						</CardContent>
					</Card>
				</Box>
			))
		)
	}

	renderLayoutBlocks() {
		const { classes } = this.props;

		return (
			titles.map((title, index) => (
				<Grid item md={4} key={index}>
					<Box mt={3} mb={3}>
						<b className={classes.textCapitalize}>{title.label}</b>
					</Box>

					{this.renderTasks(title.value)}

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

export default withStyles(styles)(TaskBoard);
