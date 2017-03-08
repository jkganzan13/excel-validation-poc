import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions';
import ValidationComponent from './ValidationComponent';
import CustomerTable from './CustomerTable';

class PeopleContainer extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div>
				<ValidationComponent actions={this.props.actions} />
				<CustomerTable customers={this.props.validation.customers} />
			</div>
		);
	}
}

PeopleContainer.propTypes = {
	validation: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		validation: state.validation
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);