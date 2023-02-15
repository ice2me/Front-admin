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
	Button,
	Form,
	OverlayTrigger,
	Popover
} from "react-bootstrap"
import Loader from "../../components/Loader/Loader"
import { Formik } from "formik"
import { getRegistrationShopSchema } from "../../utils/validation/YupRegistrationShop";
import { toast } from "react-toastify";
import { deleteSpace } from "../../utils/toggleSpaceString";

export const RegistrationShop = ({hideRegistrationShopWindow}) => {
	const [form, setForm] = useState({})
	const [shopFacebook, setShopFacebook] = useState('')
	const [shopViber, setShopViber] = useState('')
	const [shopTelegram, setShopTelegram] = useState('')
	const [shopInstagram, setShopInstagram] = useState('')
	const [shopVariantTrading, setShopVariantTrading] = useState('Shop')
	const [registerShop, {isLoading: isRegisterShopLoading}] = useRegisterShopMutation()
	const {user} = useSelector(state => state.userStore)
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
			id: user._id,
			shop_name: deleteSpace(values.shop_name),
			description: values.description,
			shop_link: values.shop_link.trim().toLowerCase(),
			socials_links: {
				shop_facebook: shopFacebook,
				shop_viber: shopViber,
				shop_telegram: shopTelegram,
				shop_instagram: shopInstagram,
			},
			open_shop: values.open_shop || false,
			variant_trading: shopVariantTrading
		}
		try {
			const {data} = await registerShop(formDate)
			dispatch(setShop(data?.isUser))
			if (data.isUser) {
				navigate(APP_ROUTE.DEFAULT)
				hideRegistrationShopWindow()
			} else {
				toast(
					data?.error.shop_name
				)
				setErrors({
					shop_name: data?.error,
				})
			}
		} catch (e) {
			console.log(e)
		}
	}

	const popover = (
		<Popover id="popover-basic">
			<Popover.Header as="h3">
				<FormattedMessage id={shopVariantTrading} />
			</Popover.Header>
			<Popover.Body>
				<FormattedMessage
					id={shopVariantTrading === "Shop"
						?
						'ifYouChooseShopYourCustomers'
						:
						'ifYouChooseMenuYourCustomers'}
				/>
			</Popover.Body>
		</Popover>
	)

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
					shop_name: form.shop_name || '',
					description: form.description || '',
					shop_link: form.shop_link || '',
					socials_links: {
						shop_facebook: shopFacebook || '',
						shop_viber: shopViber || '',
						shop_telegram: shopTelegram || '',
						shop_instagram: shopInstagram || '',
					},
					open_shop: 'false',
					variant_trading: shopVariantTrading
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
							<OverlayTrigger
								trigger="focus"
								placement="bottom"
								overlay={popover}
								className='mb-10'
							>
								<Button
									variant={(shopVariantTrading === "Shop") ? "secondary" : "light"}
									onClick={() => setShopVariantTrading("Shop")}
									className='mb-1 mt-3'
								>
									<FormattedMessage
										id='iWantShop'
										values={{total: formatMessage({id: 'Shop'})}}
									/>
								</Button>
							</OverlayTrigger>
							<OverlayTrigger
								trigger="focus"
								placement="bottom"
								overlay={popover}
							>
								<Button
									variant={(shopVariantTrading === "Menu") ? "secondary" : "light"}
									onClick={() => setShopVariantTrading("Menu")}
								>
									<FormattedMessage
										id='iWantShop'
										values={{total: formatMessage({id: 'Menu'})}}
									/>
								</Button>
							</OverlayTrigger>
						</Form.Group>

						<Form.Group className="registrationShop-form_label">
							<div className='registrationShop-form_title'>
								<span>
									<FormattedMessage
										id='nameShop'
										values={{total: formatMessage({id: `${shopVariantTrading}`})}}
									/><b> * </b>
								</span>
							</div>
							<Form.Control
								className={`pe-5  ${touched.shop_name ? "is-touch " : ""} ${
									errors.shop_name && touched.shop_name ? " is-invalid" : ""
								} registrationShop-form_input`}
								type="text"
								autoComplete='on'
								placeholder={formatMessage({id: 'enterNameShop'})}
								value={values.shop_name}
								name='shop_name'
								onBlur={handleBlur}
								onChange={(e) => {
									handleChange(e)
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

						{/*<Form.Group className="registrationShop-form_label">*/}
						{/*	<div className='registrationShop-form_title'>*/}
						{/*		<span>*/}
						{/*			<FormattedMessage id='allowYourCustomersVisitOtherStoresOfThisPlatform' />*/}
						{/*		</span>*/}
						{/*	</div>*/}
						{/*	<Form.Check*/}
						{/*		type="checkbox"*/}
						{/*		id="custom-switch"*/}
						{/*		name='open_shop'*/}
						{/*		value={values?.open_shop}*/}
						{/*		onBlur={handleBlur}*/}
						{/*		defaultChecked*/}
						{/*		className='customCheckbox'*/}
						{/*		label={values?.open_shop*/}
						{/*			?*/}
						{/*			<FormattedMessage id='yes' />*/}
						{/*			:*/}
						{/*			<FormattedMessage id='no' />}*/}
						{/*		onChange={(e) => {*/}
						{/*			handleChange(e)*/}
						{/*			formDateUpdateHandler({*/}
						{/*				[e.target.name]: e.target.value*/}
						{/*			})*/}
						{/*		}}*/}
						{/*	/>*/}
						{/*</Form.Group>*/}

						<Form.Group className="registrationShop-form_label">
							<div className='registrationShop-form_title'>
								<span>
									<FormattedMessage
										id='descriptionShop'
										values={{total: formatMessage({id: `${shopVariantTrading}`})}}
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
										values={{total: formatMessage({id: `${shopVariantTrading}`})}}
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
										values={{total: formatMessage({id: `${shopVariantTrading}`})}}
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
										values={{total: formatMessage({id: `${shopVariantTrading}`})}}
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
										values={{total: formatMessage({id: `${shopVariantTrading}`})}}
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
										values={{total: formatMessage({id: `${shopVariantTrading}`})}}
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
