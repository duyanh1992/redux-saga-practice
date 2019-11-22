import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import loadingImg from './../../asset/images/loading.gif';
import { connect } from 'react-redux';

class GlobalLoading extends Component {
	render() {
		const { classes, ui } = this.props;

		if(ui.isShow) {
			return (
				<div className={classes.globalLoading}>
					<img src={loadingImg} className={classes.loadingIcon} />
				</div>
			)
		}

		return null;
	}
}

const mapStateToProps = state => {
	return {
		ui: state.ui
	};
}

const withConnect = connect(mapStateToProps, null);

export default withStyles(styles)(withConnect(GlobalLoading));
