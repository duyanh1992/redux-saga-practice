import React, { Component } from 'react';
import styles from '../styles/StylePractice1';
import { withStyles } from '@material-ui/core';

class StylePractice extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.box}>
				<div className={classes.shape}>React JS</div>
				<div className={classes.shape}>Angular JS</div>
				<div className={classes.shape}>Vue JS</div>
			</div>
		);
	}
}

export default withStyles(styles)(StylePractice);