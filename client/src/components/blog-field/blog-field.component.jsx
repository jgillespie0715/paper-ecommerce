import React from 'react';

function BlogField() {
	return (
		<div className='input.name'>
			<label>label here</label>
			<input style={{ marginBottom: '5px' }} />
			<div className='red-text' style={{ marginBottom: '20px' }}>
				touched and error
			</div>
		</div>
	);
}

export default BlogField;
