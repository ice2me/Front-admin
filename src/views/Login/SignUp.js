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
} from "../../utils/validation/yupLoginEmail";
import { Formik } from "formik"
import {
	useRegisterUserMutation,
} from "../../redux/services/authApi";
import { APP_ROUTE } from "../../utils/constants";
import LoaderForButton from "../../components/Loader/LoaderForButton";
import { useDispatch } from "react-redux";
import Resizer from "react-image-file-resizer";
import { setUser } from "../../redux/slices/userSlice";
import {
	FormattedMessage,
	useIntl
} from "react-intl";

export const SignUp = () => {

	const [form, setForm] = useState({});
	const [shopFacebook, setShopFacebook] = useState('')
	const [shopViber, setShopViber] = useState('')
	const [shopTelegram, setShopTelegram] = useState('')
	const [shopInstagram, setShopInstagram] = useState('')
	const [passwordType, setPasswordType] = useState("password")
	const [confirmPasswordType, setConfirmPasswordType] = useState("password")
	const [registerUser, {isLoading: isRegisterUserLoading}] = useRegisterUserMutation()
	const { formatMessage } = useIntl()

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const formDateUpdateHandler = (opt) => {
		setForm({...form, ...opt})
	}

	const handleSubmit = async (values,
		{
			setErrors,
			resetForm
		}) => {
		const formDate = {
			username: values.username,
			email: values.email.trim().toLowerCase(),
			phone: values.phone,
			password: values.password,
			password_confirm: values.password_confirm,
			shop_name: values.shop_name,
			description: values.description,
			shop_link: values.shop_link.trim().toLowerCase(),
			socials_links: {
				shop_facebook: shopFacebook,
				shop_viber: shopViber,
				shop_telegram: shopTelegram,
				shop_instagram: shopInstagram,
			}
		}

		try {
			const {data} = await registerUser(formDate)
			dispatch(setUser(data.newUser))
			if (data.newUser && data.token && !data.error) {
				toast(data?.message)
				navigate(APP_ROUTE.CATEGORIES_LIST)
			} else {
				toast(
					data?.error.username ||
					data?.error.email ||
					data?.error.phone ||
					data?.error.shop_name ||
					data.error.password
				)
				setErrors({
					username: data?.error.username,
					email: data?.error.email,
					phone: data?.error.phone,
					shop_name: data?.error.shop_name,
					password: data.error.password
				})
			}
		} catch (e) {
			console.log(e)
			resetForm()
			navigate(APP_ROUTE.LOGIN)
		}
	}

	const reversePasswordType = () => {
		if (passwordType === "password") {
			setPasswordType("text");
		} else {
			setPasswordType("password")
		}
	}
	const reverseConfirmPasswordType = () =>
		confirmPasswordType === "password"
			? setConfirmPasswordType("text")
			: setConfirmPasswordType("password")

	return (
		<div className='registrationShop'>
			<h1>
				<FormattedMessage id="signUp" />
			</h1>
			<Formik
				validateOnChange
				initialValues={{
					username: '',
					email: '',
					phone: '',
					password: '',
					password_confirm: '',
					shop_name: '',
					description: '',
					shop_link: '',
					socials_links: {
						shop_facebook: '',
						shop_viber: '',
						shop_telegram: '',
						shop_instagram: '',
					}
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
									<FormattedMessage id='name' /><b> * </b>
								</span>
							</div>
							<Form.Control
								type="text"
								placeholder={formatMessage ({id: 'enterName'})}
								value={values.username}
								name='username'
								onBlur={handleBlur}
								className={`pe-5  ${touched.username ? "is-touch " : ""} ${
									errors.username && touched.username ? " is-invalid" : ""
								} registrationShop-form_input`}
								onChange={(e) => {
									handleChange(e);
									formDateUpdateHandler({
										[e.target.name]: e.target.value
									})
								}}
							/>
							{errors.username && touched.username && (
								<Form.Control.Feedback type="invalid">
									{errors.username}
								</Form.Control.Feedback>
							)}
						</Form.Group>
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
								placeholder={formatMessage ({id: 'enterEmail'})}
								value={values.email}
								name='email'
								onBlur={handleBlur}
								onChange={(e) => {
									handleChange(e);
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
								placeholder={formatMessage ({id: 'enterMobilePhone'})}
								value={values.phone}
								name='phone'
								onBlur={handleBlur}
								onChange={(e) => {
									handleChange(e);
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

						<Form.Group className=" registrationShop-form_label">
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
									placeholder={formatMessage ({id: 'enterPassword'})}
									value={values.password}
									onBlur={handleBlur}
									onChange={(e) => {
										handleChange(e);
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
									placeholder={formatMessage ({id: 'enterPasswordConfirm'})}
									value={values.password_confirm}
									onBlur={handleBlur}
									onChange={(e) => {
										handleChange(e);
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
						<Form.Group className="registrationShop-form_label">
							<div className='registrationShop-form_title'>
								<span>
									<FormattedMessage id='nameShop' /><b> * </b>
								</span>
							</div>
							<Form.Control
								className={`pe-5  ${touched.shop_name ? "is-touch " : ""} ${
									errors.shop_name && touched.shop_name ? " is-invalid" : ""
								} registrationShop-form_input`}
								type="text"
								placeholder={formatMessage ({id: 'enterNameShop'})}
								value={values.shop_name}
								name='shop_name'
								onBlur={handleBlur}
								onChange={(e) => {
									handleChange(e);
									formDateUpdateHandler({
										[e.target.name]: e.target.value
									})
								}}
							/>
							{errors.shop_name && touched.shop_name && (
								<Form.Control.Feedback type="invalid">
									{errors.shop_name}
								</Form.Control.Feedback>
							)}
						</Form.Group>
						<Form.Group className="registrationShop-form_label">
							<div className='registrationShop-form_title'>
								<span>
									<FormattedMessage id='descriptionShop' />
								</span>
							</div>
							<Form.Control
								className={`pe-5  ${touched.description ? "is-touch " : ""} ${
									errors.description && touched.description ? " is-invalid" : ""
								} registrationShop-form_input registrationShop-form_description`}
								as="textarea"
								placeholder={formatMessage ({id: 'enterDescriptionShop'})}
								value={values.description}
								name='description'
								onBlur={handleBlur}
								onChange={(e) => {
									handleChange(e);
									formDateUpdateHandler({
										[e.target.name]: e.target.value
									})
								}}
							/>
							{errors.description && touched.description && (
								<Form.Control.Feedback type="invalid">
									{errors.description}
								</Form.Control.Feedback>
							)}
						</Form.Group>
						<Form.Group className="registrationShop-form_label">
							<div className='registrationShop-form_title'>
								<span>
									<FormattedMessage id='shopLink' />
								</span>
							</div>
							<Form.Control
								className={`pe-5  ${touched.shop_link ? "is-touch " : ""} ${
									errors.shop_link && touched.shop_link ? " is-invalid" : ""
								} registrationShop-form_input`}
								type="text"
								placeholder={formatMessage ({id: 'enterEnterShopLink'})}
								value={values.shop_link}
								name='shop_link'
								onBlur={handleBlur}
								onChange={(e) => {
									handleChange(e);
									formDateUpdateHandler({
										[e.target.name]: e.target.value
									})
								}}
							/>
							{errors.shop_link && touched.shop_link && (
								<Form.Control.Feedback type="invalid">
									{errors.shop_link}
								</Form.Control.Feedback>
							)}
						</Form.Group>
						<Form.Group className="registrationShop-form_label">
							<div className='registrationShop-form_title'>
								<span>
									<FormattedMessage id='shopFacebook' />
								</span>
							</div>
							<Form.Control
								className={`pe-5  ${touched?.shop_facebook ? "is-touch " : ""} ${
									errors?.shop_facebook && touched?.shop_facebook ? " is-invalid" : ""
								} registrationShop-form_input`}
								type="text"
								placeholder={formatMessage ({id: 'enterEnterShopFacebook'})}
								value={shopFacebook}
								onBlur={handleBlur}
								name='shop_facebook'
								onChange={(e) => {
									handleChange(e);
									setShopFacebook(e.target.value)
								}}
							/>
							{errors?.shop_facebook && touched?.shop_facebook && (
								<Form.Control.Feedback type="invalid">
									{errors?.shop_facebook}
								</Form.Control.Feedback>
							)}
						</Form.Group>
						<Form.Group className="registrationShop-form_label">
							<div className='registrationShop-form_title'>
								<span>
									<FormattedMessage id='shopViber' />
								</span>
							</div>
							<Form.Control
								className={`pe-5  ${touched?.shop_viber ? "is-touch " : ""} ${
									errors?.shop_viber && touched?.shop_viber ? " is-invalid" : ""
								} registrationShop-form_input`}
								type="text"
								placeholder={formatMessage ({id: 'enterEnterShopViber'})}
								value={shopViber}
								name='shop_viber'
								onBlur={handleBlur}
								onChange={(e) => {
									handleChange(e);
									setShopViber(e.target.value)
								}}
							/>
							{errors?.shop_viber && touched?.shop_viber && (
								<Form.Control.Feedback type="invalid">
									{errors?.shop_viber}
								</Form.Control.Feedback>
							)}
						</Form.Group>
						<Form.Group className="registrationShop-form_label">
							<div className='registrationShop-form_title'>
								<span>
									<FormattedMessage id='shopTelegram' />
								</span>
							</div>
							<Form.Control
								className={`pe-5  ${touched?.shop_telegram ? "is-touch " : ""} ${
									errors?.shop_telegram && touched?.shop_telegram ? " is-invalid" : ""
								} registrationShop-form_input`}
								type="text"
								placeholder={formatMessage ({id: 'enterEnterShopTelegram'})}
								value={shopTelegram}
								name='shop_telegram'
								onBlur={handleBlur}
								onChange={(e) => {
									handleChange(e);
									setShopTelegram(e.target.value)
								}}
							/>
							{errors?.shop_telegram && touched?.shop_telegram && (
								<Form.Control.Feedback type="invalid">
									{errors?.shop_telegram}
								</Form.Control.Feedback>
							)}
						</Form.Group>
						<Form.Group className="registrationShop-form_label">
							<div className='registrationShop-form_title'>
								<span>
									<FormattedMessage id='shopInstagram' />
								</span>
							</div>
							<Form.Control
								className={`pe-5  ${touched?.shop_instagram ? "is-touch " : ""} ${
									errors?.shop_instagram && touched?.shop_instagram ? " is-invalid" : ""
								} registrationShop-form_input`}
								type="text"
								placeholder={formatMessage ({id: 'enterEnterShopInstagram'})}
								value={shopInstagram}
								name='shop_instagram'
								onBlur={handleBlur}
								onChange={(e) => {
									handleChange(e);
									setShopInstagram(e.target.value)
								}}
							/>
							{errors?.shop_instagram && touched?.shop_instagram && (
								<Form.Control.Feedback type="invalid">
									{errors?.shop_instagram}
								</Form.Control.Feedback>
							)}
						</Form.Group>
						<button
							className="registrationShop-form_button"
							type='submit'
							disabled={(!isValid && dirty) || isRegisterUserLoading}
						>
							<span>
								<FormattedMessage id='signUp' />
							</span> {isRegisterUserLoading && <LoaderForButton />}
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

