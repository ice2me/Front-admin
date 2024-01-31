import React from 'react'
import { Form } from "react-bootstrap"
import { FormattedMessage } from "react-intl"

const Input = ({setEmail, touched, errors, formatMessage, handleBlur,email}) => {
	return (
		<Form.Group className='registrationShop-form_label'>
			<div className='registrationShop-form_title'>
				<span >
					<FormattedMessage id='email' />
				</span >
			</div >
			<Form.Control
				className={`pe-5  ${touched?.email ? "is-touch " : ""} ${errors?.email && touched?.email ? " is-invalid" : ""} registrationShop-form_input`}
				type='email'
				placeholder={formatMessage({id: 'enterEmail'})}
				value={email}
				name='email'
				onBlur={handleBlur}
				onChange={(e) => setEmail(e.target.value)}
			/>
			{errors?.email && touched?.email && (
				<Form.Control.Feedback type='invalid'>
					{errors?.email}
				</Form.Control.Feedback >
			)}
		</Form.Group >
	)
}

export default Input