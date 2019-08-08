import React from 'react';

import { Field, Formik, Form } from 'formik';

const UsersForm = () => {
	return (
		<Formik>
			<Form>
				<h1>Form</h1>
				<Field type="text" name="name" placeholder="Name" />
				<Field type="email" name="email" placeholder="Email" />
				<Field type="password" name="password" placeholder="Password" />
				<label>
					Terms of Service
					<Field type="checkbox" name="terms" checked={false} />
				</label>
			</Form>
		</Formik>
	);
};

export default UsersForm;
