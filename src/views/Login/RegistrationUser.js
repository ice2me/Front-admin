import React, {
	useState
} from 'react'
import {
	Form
} from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import eye from '../../assets/icons/eye.svg'
import eyeBlocked from '../../assets/icons/eye-blocked.svg'
import {
	getRegistrationSchema
} from "../../utils/validation/yupLoginEmail"
import { Formik } from "formik"
import {
	useRegisterUserMutation,
} from "../../redux/services/authApi"
import {
	APP_ROUTE
} from "../../utils/constants"
import { useDispatch } from "react-redux"
import { setUser } from "../../redux/slices/userSlice"
import {
	FormattedMessage,
	useIntl
} from "react-intl"
import Loader from "../../components/Loader/Loader"

export const RegistrationUser = () => {
	const [form, setForm] = useState({})
	const [passwordType, setPasswordType] = useState("password")
	const [confirmPasswordType, setConfirmPasswordType] = useState("password")
	const [registerUser, {isLoading: isRegisterUserLoading}] = useRegisterUserMutation()
	const {formatMessage} = useIntl()

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const formDateUpdateHandler = (opt) => {
		setForm({...form, ...opt})
	}

	const handleSubmit = async (values, {
		setErrors,
		resetForm
	}) => {
		const formDate = {
			email: values.email.trim().toLowerCase(),
			phone: values.phone,
			password: values.password,
			password_confirm: values.password_confirm,
		}
		try {
			const {data} = await registerUser(formDate)
			dispatch(setUser(data?.newUser))
			if (data?.newUser && data?.token && !data?.error) {
				navigate(APP_ROUTE.CATEGORIES_LIST)
			} else {
				toast(
					data?.error.email ||
					data?.error.phone ||
					data?.error.password
				)
				setErrors({
					email: data?.error.email,
					phone: data?.error.phone,
					password: data?.error.password
				})
			}
		} catch (e) {
			resetForm()
			navigate(APP_ROUTE.LOGIN)
		}
	}

	const reversePasswordType = () => {
		if (passwordType === "password") {
			setPasswordType("text")
		} else {
			setPasswordType("password")
		}
	}
	const reverseConfirmPasswordType = () =>
		confirmPasswordType === "password"
			? setConfirmPasswordType("text")
			: setConfirmPasswordType("password")

	if (isRegisterUserLoading) {
		return <Loader />
	}

	return (
		<div className='registrationShop'>
			<h1>
				<FormattedMessage id="signUp" />
			</h1>
			<Formik
				validateOnChange
				initialValues={{
					email: form.email || '',
					phone: form.phone || '',
					password: form.password || '',
					password_confirm: form.password_confirm || '',
				}}
				validationSchema={getRegistrationSchema(formatMessage)}
				onSubmit={handleSubmit}
				enableReinitialize
			>
				{({
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
						onSubmit={handleSubmit}
					>
						<Form.Group className="registrationShop-form_label">
							<div className='registrationShop-form_title'>
								<span>
									<FormattedMessage id='email' /><b> * </b>
								</span>
							</div>
							<Form.Control
								className={`pe-5  ${touched.email ? "is-touch " : ""} ${
									errors.email && touched.email ? " is-invalid" : ""
								} registrationShop-form_input`}
								type="email"
								autoComplete='on'
								placeholder={formatMessage({id: 'enterEmail'})}
								value={values.email}
								name='email'
								onBlur={handleBlur}
								onChange={(e) => {
									handleChange(e)
									formDateUpdateHandler({
										[e.target.name]: e.target.value
									})
								}}
							/>
							{errors.email && touched.email && (
								<Form.Control.Feedback type="invalid">
									{errors.email}
								</Form.Control.Feedback>
							)}
						</Form.Group>

						<Form.Group className="registrationShop-form_label">
							<div className='registrationShop-form_title'>
								<span>
									<FormattedMessage id='mobilePhone' /><b> * </b>
								</span>
							</div>
							<Form.Control
								className={`pe-5  ${touched.phone ? "is-touch " : ""} ${
									errors.phone && touched.phone ? " is-invalid" : ""
								} registrationShop-form_input`}
								type="phone"
								autoComplete='on'
								placeholder={formatMessage({id: 'enterMobilePhone'})}
								value={values.phone}
								name='phone'
								onBlur={handleBlur}
								onChange={(e) => {
									handleChange(e)
									formDateUpdateHandler({
										[e.target.name]: e.target.value
									})
								}}
							/>
							{errors.phone && touched.phone && (
								<Form.Control.Feedback type="invalid">
									{errors.phone}
								</Form.Control.Feedback>
							)}
						</Form.Group>

						<Form.Group className="registrationShop-form_label">
							<div className='registrationShop-form_title'>
								<span>
									<FormattedMessage id='password' /><b> * </b>
								</span>
							</div>
							<div className='registrationShop-form_eye position-relative'>
                  <span
										className="position-absolute end-0 pe-4 top-50 translate-middle-y text-secondary"
										onClick={reversePasswordType}
									>
                    {passwordType === "password" && (
											<img
												src={eyeBlocked}
												alt="eye"
											/>
										)}
										{passwordType === "text" && (
											<img
												src={eye}
												alt="eye blocked"
											/>
										)}
                  </span>
								<Form.Control
									className={`pe-5  ${touched.password ? "is-touch " : ""} ${
										errors.password && touched.password ? " is-invalid" : ""
									} registrationShop-form_input`}
									type={passwordType}
									name="password"
									autoComplete='on'
									placeholder={formatMessage({id: 'enterPassword'})}
									value={values.password}
									onBlur={handleBlur}
									onChange={(e) => {
										handleChange(e)
										formDateUpdateHandler({
											[e.target.name]: e.target.value
										})
									}}
								/>
								{errors.password && touched.password && (
									<Form.Control.Feedback type="invalid">
										{errors.password}
									</Form.Control.Feedback>
								)}
							</div>
						</Form.Group>

						<Form.Group className=" registrationShop-form_label">
							<div className='registrationShop-form_title'>
								<span>
									<FormattedMessage id='passwordConfirm' /><b> * </b>
								</span>
							</div>
							<div className='registrationShop-form_eye position-relative'>
                  <span
										className="position-absolute end-0 pe-4 top-50 translate-middle-y text-secondary"
										onClick={reverseConfirmPasswordType}
									>
                    {confirmPasswordType === "password" && (
											<img
												src={eyeBlocked}
												alt="eye"
											/>
										)}
										{confirmPasswordType === "text" && (
											<img
												src={eye}
												alt="eye blocked"
											/>
										)}
                  </span>
								<Form.Control
									className={`pe-5  ${touched.password_confirm ? "is-touch " : ""} ${
										errors.password_confirm && touched.password_confirm ? " is-invalid" : ""
									} registrationShop-form_input`}
									type={confirmPasswordType}
									name="password_confirm"
									autoComplete='on'
									placeholder={formatMessage({id: 'enterPasswordConfirm'})}
									value={values.password_confirm}
									onBlur={handleBlur}
									onChange={(e) => {
										handleChange(e)
										formDateUpdateHandler({
											[e.target.name]: e.target.value
										})
									}}
								/>
								{errors.password_confirm && touched.password_confirm && (
									<Form.Control.Feedback type="invalid">
										{errors.password_confirm}
									</Form.Control.Feedback>
								)}
							</div>
						</Form.Group>

						<button
							className="registrationShop-form_button"
							type='submit'
							disabled={(!isValid && dirty) || isRegisterUserLoading}
						>
							<span>
								<FormattedMessage id='signUp' />
							</span>
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

