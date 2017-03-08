import React from 'react';

class ValidationComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showUploadedMessage: false
		};
		this.uploadFile = this.uploadFile.bind(this);
	}

	uploadFile(e) {
		e.preventDefault();
		const file = e.currentTarget.files[0];
		console.log(file)
		e.currentTarget.value=''
		this.setState({ showUploadedMessage: true })
	}

	render() {
		return (
			<div>
				<input type="file" onChange={this.uploadFile} />
				{ this.state.showUploadedMessage ? <p>File Uploaded!</p> : '' }
			</div>
		);
	}
}

ValidationComponent.propTypes = {};
ValidationComponent.defaultProps = {};

export default ValidationComponent;
