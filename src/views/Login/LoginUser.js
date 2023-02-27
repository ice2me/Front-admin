import React, {
	useState
} from 'react'
import { Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import {
	useLoginMutation
} from "../../redux/services/authApi"
import { toast } from "react-toastify"
import { APP_ROUTE } from "../../utils/constants"
import eye from "../../assets/icons/eye.svg"
import eyeBlocked from "../../assets/icons/eye-blocked.svg"
import { getLoginWithEmailSchema } from "../../utils/validation/yupLoginEmail"
import { Formik } from "formik"
import {
	FormattedMessage,
	useIntl
} from "react-intl"
import Loader from "../../components/Loader/Loader";

export const LoginUser = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordType, setPasswordType] = useState("password")
	const [login, {isLoading: isLoginLoading}] = useLoginMutation()
	const { formatMessage } = useIntl()
	const navigate = useNavigate()
	const handleSubmit = async (values,
		{
			setErrors,
			resetForm
		}) => {
		try {
			const formData = {
				email: values.email.trim().toLowerCase(),
				password: values.password,
			}
			const {data} = await login(formData)
			resetForm()
			if (data.user && data.token) {
				toast(data.message)
				navigate(APP_ROUTE.CATEGORIES_LIST)
			} else {
				setErrors(data.error.message)
				toast(data.error.message)
				navigate(APP_ROUTE.LOGIN)
				// return toast(data.error.message)
			}
		} catch (e) {
			console.log(e)
		}
	}
	
	const reversePasswordType = () => {
		if (passwordType === "password") {
			setPasswordType("text")
		} else {
			setPasswordType("password")
		}
	}

	if (isLoginLoading) {
		return <Loader />
	}
	
	return (
		<div className="login-body login-body_center">
			<h1>
				<FormattedMessage id="signIn" />
			</h1>
			<Formik
				validateOnChange
				initialValues={ {
					email: email,
					password: password,
				} }
				validationSchema={ getLoginWithEmailSchema(formatMessage) }
				onSubmit={ handleSubmit }
				enableReinitialize
			>
				{ ({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					isValid,
					handleSubmit,
					dirty
				}) => (
					<Form
						className="registrationShop-form"
						onSubmit={ handleSubmit }
					>
						<Form.Group className="registrationShop-form_label">
							<div className='registrationShop-form_title'>
								<span>
									<FormattedMessage id="email" />
								</span>
							</div>
							<Form.Control
								className={ `pe-5  ${ touched.email ? "is-touch " : "" } ${
									errors.email && touched.email ? " is-invalid" : ""
								} registrationShop-form_input` }
								type="email"
								placeholder={formatMessage ({id: 'enterEmail'})}
								value={ email }
								name='email'
								onBlur={ handleBlur }
								onChange={ (e) => setEmail(e.target.value) }
							/>
							{ errors.email && touched.email && (
								<Form.Control.Feedback type="invalid">
									{ errors.email }
								</Form.Control.Feedback>
							) }
						</Form.Group>
						<Form.Group className=" registrationShop-form_label">
							<div className='registrationShop-form_title'>
								<span>
									<FormattedMessage id="password" />
								</span>
							</div>
							<div className='registrationShop-form_eye position-relative'>
                  <span
										className="position-absolute end-0 pe-4 top-50 translate-middle-y text-secondary"
										onClick={ reversePasswordType }
									>
                    { passwordType === "password" && (
											<img
												src={ eye }
												alt="eye"
											/>
										) }
										{ passwordType === "text" && (
											<img
												src={ eyeBlocked }
												alt="eye blocked"
											/>
										) }
                  </span>
								<Form.Control
									className={ `pe-5  ${ touched.password ? "is-touch " : "" } ${
										errors.password && touched.password ? " is-invalid" : ""
									} registrationShop-form_input` }
									type={ passwordType }
									name="password"
									placeholder={formatMessage ({id: 'enterPassword'})}
									value={ values.password }
									onBlur={ handleBlur }
									onChange={ (e) => {
										handleChange(e)
										setPassword(e.target.value)
									} }
								/>
								{ errors.password && touched.password && (
									<Form.Control.Feedback type="invalid">
										{ errors.password }
									</Form.Control.Feedback>
								) }
							</div>
						</Form.Group>
						<button
							className="login-button"
							type="submit"
							disabled={ (!isValid && dirty) || isLoginLoading }
						>
							<span>
								<FormattedMessage id='signIn' />
							</span>
						</button>
					</Form>
				) }
			</Formik>
		</div>
	)
}

