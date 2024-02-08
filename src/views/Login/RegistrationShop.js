import React, { useState } from "react"
import { useRegisterShopMutation } from "../../redux/services/authApi"
import {
	FormattedMessage,
	useIntl
} from "react-intl"
import { useNavigate } from "react-router-dom"
import {
	useDispatch,
	useSelector
} from "react-redux"
import { setShop } from "../../redux/slices/userSlice"
import { APP_ROUTE } from "../../utils/constants"
import {
	Form,
} from "react-bootstrap"
import Loader from "../../components/Loader/Loader"
import { Formik } from "formik"
import { getRegistrationShopSchema } from "../../utils/validation/YupRegistrationShop";
import { toast } from "react-toastify";

export const RegistrationShop = ({hideRegistrationShopWindow}) => {
	const [form, setForm] = useState({})
	const [shopFacebook, setShopFacebook] = useState('')
	const [shopViber, setShopViber] = useState('')
	const [shopTelegram, setShopTelegram] = useState('')
	const [shopInstagram, setShopInstagram] = useState('')
	const [registerShop, {isLoading: isRegisterShopLoading}] = useRegisterShopMutation()
	const {user} = useSelector(state => state.userStore)
	const {formatMessage} = useIntl()

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const formDateUpdateHandler = (opt) => {
		setForm({...form, ...opt})
	}

	const handleSubmit = async (values) => {
		const formDate = {
			id: user._id,
			description: values.description,
			shop_link: values.shop_link.trim().toLowerCase(),
			socials_links: {
				shop_facebook: shopFacebook,
				shop_viber: shopViber,
				shop_telegram: shopTelegram,
				shop_instagram: shopInstagram,
			},
			open_shop: values.open_shop || false,
			calculate_total_cost: values.calculate_total_cost || false
		}
		try {
			const {data} = await registerShop(formDate)
			dispatch(setShop(data?.isShop))
			if (data.isShop) {
				navigate(APP_ROUTE.DEFAULT)
				toast(data?.message)
				hideRegistrationShopWindow()
			}
		} catch (e) {
			console.log(e)
		}
	}

	if (isRegisterShopLoading) {
		return <Loader />
	}

	return (
		<div className='registrationShop regShop-container'>
			<h1 className='category-title'>
				<FormattedMessage id="createShopOrMenu" />
			</h1>
			<Formik
				validateOnChange
				initialValues={{
					description: form?.description || '',
					shop_link: form?.shop_link || '',
					socials_links: {
						shop_facebook: shopFacebook || '',
						shop_viber: shopViber || '',
						shop_telegram: shopTelegram || '',
						shop_instagram: shopInstagram || '',
					},
					open_shop: false,
					calculate_total_cost: form?.calculate_total_cost || false
				}}
				validationSchema={getRegistrationShopSchema(formatMessage)}
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
						className="registrationShop-form regShop-container_form"
						onSubmit={handleSubmit}
					>

						<Form.Group className="registrationShop-form_label">
							<div className='registrationShop-form_title'>
								<span>
									<FormattedMessage
										id='descriptionShop'
										values={{total: formatMessage({id: `${user?.variant_trading}`})}}
									/>
								</span>
							</div>
							<Form.Control
								className={`pe-5  ${touched.description ? "is-touch " : ""} ${
									errors.description && touched.description ? " is-invalid" : ""
								} registrationShop-form_input registrationShop-form_description`}
								as="textarea"
								autoComplete='on'
								placeholder={formatMessage({id: 'enterDescriptionShop'})}
								value={values.description}
								name='description'
								onBlur={handleBlur}
								onChange={(e) => {
									handleChange(e)
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
									<FormattedMessage
										id='shopLink'
										values={{total: formatMessage({id: `${user?.variant_trading}`})}}
									/>
								</span>
							</div>
							<Form.Control
								className={`pe-5  ${touched.shop_link ? "is-touch " : ""} ${
									errors.shop_link && touched.shop_link ? " is-invalid" : ""
								} registrationShop-form_input`}
								type="text"
								autoComplete='on'
								placeholder={formatMessage({id: 'enterEnterShopLink'})}
								value={values.shop_link}
								name='shop_link'
								onBlur={handleBlur}
								onChange={(e) => {
									handleChange(e)
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
									<FormattedMessage
										id='shopFacebook'
										values={{total: formatMessage({id: `${user?.variant_trading}`})}}
									/>
								</span>
							</div>
							<Form.Control
								className={`pe-5  ${touched?.shop_facebook ? "is-touch " : ""} ${
									errors?.shop_facebook && touched?.shop_facebook ? " is-invalid" : ""
								} registrationShop-form_input`}
								type="text"
								autoComplete='on'
								placeholder={formatMessage({id: 'enterEnterShopFacebook'})}
								value={shopFacebook}
								onBlur={handleBlur}
								name='shop_facebook'
								onChange={(e) => {
									handleChange(e)
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
									<FormattedMessage
										id='shopViber'
										values={{total: formatMessage({id: `${user?.variant_trading}`})}}
									/>
								</span>
							</div>
							<Form.Control
								className={`pe-5  ${touched?.shop_viber ? "is-touch " : ""} ${
									errors?.shop_viber && touched?.shop_viber ? " is-invalid" : ""
								} registrationShop-form_input`}
								type="text"
								autoComplete='on'
								placeholder={formatMessage({id: 'enterEnterShopViber'})}
								value={shopViber}
								name='shop_viber'
								onBlur={handleBlur}
								onChange={(e) => {
									handleChange(e)
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
									<FormattedMessage
										id='shopTelegram'
										values={{total: formatMessage({id: `${user?.variant_trading}`})}}
									/>
								</span>
							</div>
							<Form.Control
								className={`pe-5  ${touched?.shop_telegram ? "is-touch " : ""} ${
									errors?.shop_telegram && touched?.shop_telegram ? " is-invalid" : ""
								} registrationShop-form_input`}
								type="text"
								autoComplete='on'
								placeholder={formatMessage({id: 'enterEnterShopTelegram'})}
								value={shopTelegram}
								name='shop_telegram'
								onBlur={handleBlur}
								onChange={(e) => {
									handleChange(e)
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
									<FormattedMessage
										id='shopInstagram'
										values={{total: formatMessage({id: `${user?.variant_trading}`})}}
									/>
								</span>
							</div>
							<Form.Control
								className={`pe-5  ${touched?.shop_instagram ? "is-touch " : ""} ${
									errors?.shop_instagram && touched?.shop_instagram ? " is-invalid" : ""
								} registrationShop-form_input`}
								type="text"
								autoComplete='on'
								placeholder={formatMessage({id: 'enterEnterShopInstagram'})}
								value={shopInstagram}
								name='shop_instagram'
								onBlur={handleBlur}
								onChange={(e) => {
									handleChange(e)
									setShopInstagram(e.target.value)
								}}
							/>
							{errors?.shop_instagram && touched?.shop_instagram && (
								<Form.Control.Feedback type="invalid">
									{errors?.shop_instagram}
								</Form.Control.Feedback>
							)}
						</Form.Group>
						<Form.Group className="registrationShop-form_label registrationShop-form_checkbox-wrapper">
							<div className='registrationShop-form_title'>
								<span>
									<FormattedMessage id='calculateTotalCost' />
								</span>
							</div>
							<Form.Check
								className='registrationShop-form_checkbox'
								type="checkbox"
								defaultChecked={form?.calculate_total_cost}
								value={values?.calculate_total_cost}
								name='calculate_total_cost'
								onChange={(e) => {
									handleChange(e)
									formDateUpdateHandler({
										[e.target.name]: e.target.checked
									})
								}}
							/>
							<div className='registrationShop-form_title'>
								<span>
									{
										form.calculate_total_cost
											?
										<FormattedMessage id='yes' />
											:
											<FormattedMessage id='no' />
									}
								</span>
							</div>
						</Form.Group>
						<button
							className="registrationShop-form_button"
							type='submit'
							disabled={(!isValid && dirty) || isRegisterShopLoading}
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
