import React, { Component } from 'react';
import { tasks } from '../../commons/Data/index';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
	Box
} from '@material-ui/core';

class TaskItem extends Component {
  render() {
    const { value } = this.props;

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
}

export default TaskItem;
