import React, { Component } from 'react';
import { titles } from '../../constants/titles';
import { withStyles } from '@material-ui/core';
import styles from '../../styles/TaskBoard';
import TaskItem from '../../components/TaskItem/index';
import {
	Grid,
	Box
} from '@material-ui/core';

class TaskList extends Component {
  render() {
    const { classes, tasks } = this.props;

	return (
		titles.map((title, index) => (
			<Grid item md={4} key={index}>
				<Box mt={3} mb={3}>
					<b className={classes.textCapitalize}>{title.label}</b>
				</Box>

  				<TaskItem tasks={tasks} value={title.value} />
			</Grid>
			)
		)
	)
  }
}

export default withStyles(styles)(TaskList);
