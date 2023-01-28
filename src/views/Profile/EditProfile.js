import backDots from "../../assets/icons/backEdit.svg"
import photo from "../../assets/images/avatar-user.png"
import addUserIcon from "../../assets/icons/addUserPhoto.svg"
import delUserIcon from "../../assets/icons/delUserPhoto.svg"
import facebook from "../../assets/icons/facebook.svg"
import viber from "../../assets/icons/viber.svg"
import telegram from "../../assets/icons/telegram.svg"
import instagram from "../../assets/icons/instagram.svg"
import { Formik } from "formik"
import {
	setUser
} from "../../redux/slices/userSlice"
import { toast } from "react-toastify"
import { APP_ROUTE } from "../../utils/constants"
import React, {
	useEffect,
	useState
} from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
	Form
} from "react-bootstrap"
import Resizer from "react-image-file-resizer"
import {
	useUpdateUserMutation
} from "../../redux/services/authApi"
import { getUpdateUserSchema } from "../../utils/validation/yupUpdateUser"
import LoaderForButton from "../../components/Loader/LoaderForButton"
import {
	FormattedMessage,
	useIntl
} from "react-intl"

const EditProfile = ({
	user,
	setOpenEditProfile
}) => {
	const [form, setForm] = useState(user)
	const [image, setImage] = useState(user.image_logo || '')
	const [openShopToggle, setOpenShopToggle] = useState(form?.open_shop)
	const [shopFacebook, setShopFacebook] = useState(form?.socials_links?.shop_facebook)
	const [shopViber, setShopViber] = useState(form?.socials_links?.shop_viber)
	const [shopTelegram, setShopTelegram] = useState(form?.socials_links?.shop_telegram)
	const [shopInstagram, setShopInstagram] = useState(form?.socials_links?.shop_instagram)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const {formatMessage} = useIntl()

	useEffect(() => {
		setForm({
			...form,
			socials_links: {
				shop_facebook: shopFacebook,
				shop_viber: shopViber,
				shop_telegram: shopTelegram,
				shop_instagram: shopInstagram
			}
		})
	}, [shopFacebook, shopViber, shopTelegram, shopInstagram])

	const [updateUser, {isLoading: isUpdateUserLoading}] = useUpdateUserMutation()
	// const [deleteUser, {isLoading: isDeleteUserLoading}] = useDeleteUserMutation()

	const isLoading =
		isUpdateUserLoading
	// isDeleteUserLoading

	const resizeFile = (file) => {
		Resizer.imageFileResizer(
			file,
			250,
			200,
			"JPEG",
			80,
			0,
			(uri) => {
				setImage(uri)
			},
			"base64",
			250,
			200
		)
	}

	const handleSubmit = async (values,
		{
			setErrors,
			resetForm
		}) => {

		const formDate = {
			id: user._id,
			username: values?.username,
			email: values?.email.trim().toLowerCase(),
			image_logo: image,
			phone: values?.phone,
			password: values?.password,
			password_confirm: values?.password_confirm,
			shop_name: values?.shop_name,
			description: values?.description,
			shop_link: values?.shop_link.trim().toLowerCase(),
			socials_links: {
				shop_facebook: shopFacebook,
				shop_viber: shopViber,
				shop_telegram: shopTelegram,
				shop_instagram: shopInstagram,
			},
			open_shop: values.open_shop,
			style_shop: {
				text_color: "",
				background_color: "",
			},
			pay_package: values.pay_package || "Standart",
			qr_code: {
				text_color: "",
				background_color: "",
				typeQr: ""
			}
		}
		try {
			const {data} = await updateUser(formDate)
			dispatch(setUser(data.isUser))
			if (data.isUser && !data.error) {
				toast(data?.message)
				navigate(APP_ROUTE.CATEGORIES_LIST)
			} else {
				toast(
					data?.error.username ||
					data?.error.phone ||
					data?.error.shop_name
				)
				setErrors({
					username: data?.error.username,
					phone: data?.error.phone,
					shop_name: data?.error.shop_name,
				})
			}
		} catch (e) {
			console.log(e)
			resetForm()
		}
	}

	const formDateUpdateHandler = (opt) => {
		console.log(opt)
		setForm({...form, ...opt})
	}

	const removeUser = async () => {
		// const {data} = await deleteUser({id: user._id})
		// console.log(data)
		// toast(data?.message || data.error.message)
		// logout()
		// navigate(APP_ROUTE.LOGIN)
	}

	return (
		<>
			<h1 className="profile-title">
				<FormattedMessage id='editProfile' />
				<button
					className='profile-title_dots'
					onClick={() => setOpenEditProfile(false)}
				>
					<img
						src={backDots}
						alt="dots edit profile"
					/>
				</button>
			</h1>
			<Formik
				validateOnChange
				initialValues={{
					username: form.username,
					email: form.email,
					phone: form.phone,
					shop_name: form.shop_name,
					description: form.description,
					shop_link: form.shop_link,
					socials_links: {
						shop_facebook: shopFacebook,
						shop_viber: shopViber,
						shop_telegram: shopTelegram,
						shop_instagram: shopInstagram,
					},
					open_shop: form.open_shop,
					style_shop: {
						text_color: "",
						background_color: "",
					},
					pay_package: form.pay_package,
					qr_code: {
						text_color: "",
						background_color: "",
						typeQr: ""
					}
				}}
				validationSchema={getUpdateUserSchema(formatMessage)}
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
						className="editProfile-body"
						onSubmit={handleSubmit}
					>
						<div className='editProfile-body_wrapper'>
							<div
								className="editProfile-body_photo"
								style={
									!image
										?
										{backgroundImage: `url(${photo})`}
										:
										{backgroundImage: `url(${image})`}
								}
							>
							</div>
							<div className='editProfile-body_photo-block'>
								<button
									className='editProfile-body_photo-button'
									type='button'
								>
									<img
										src={addUserIcon}
										alt="add user photo"
									/>
									{
										!image && <label className="editProfile-body_content_inpfile">
											<input
												type="file"
												name='image_logo'
												placeholder="Image/Logo Shop"
												onChange={e => resizeFile(e.target.files[0])}
											/>
										</label>
									}

								</button>
								<button
									className='editProfile-body_photo-button'
									type='button'
									onClick={() => setImage('')}
								>
									<img
										src={delUserIcon}
										alt="dell user photo"
									/>
								</button>
							</div>
						</div>

						<div className='editProfile-body_wrapper'>
							<ul className="editProfile-body_content">
								<li className="editProfile-body_content-text">
									<span>
										<FormattedMessage id='name' />
									</span>
									<Form.Control
										type="text"
										placeholder="Enter name"
										value={values.username}
										name='username'
										onBlur={handleBlur}
										className={`pe-5  ${touched.username ? "is-touch " : ""} ${
											errors.username && touched.username ? " is-invalid" : ""
										} editProfile-body_content_input`}
										onChange={(e) => {
											handleChange(e)
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
								</li>
								<li className="editProfile-body_content-text">
									<span>
										<FormattedMessage id='mobilePhone' />
									</span>
									<Form.Control
										className={`pe-5  ${touched.phone ? "is-touch " : ""} ${
											errors.phone && touched.phone ? " is-invalid" : ""
										} editProfile-body_content_input`}
										type="number"
										placeholder="Enter mobile phone"
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
								</li>
								<li className="editProfile-body_content-text">
									<span>
										<FormattedMessage id='email' />
									</span>
									<p>{user.email}</p>
								</li>
								<li className="editProfile-body_content-text">
									<span>
										<FormattedMessage id='nameShop' />
									</span>
									<Form.Control
										className={`pe-5  ${touched.shop_name ? "is-touch " : ""} ${
											errors.shop_name && touched.shop_name ? " is-invalid" : ""
										} editProfile-body_content_input`}
										type="text"
										placeholder="Enter shop name"
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
								</li>
								<li className="editProfile-body_content-text flex-column">
									<p>
										<FormattedMessage id='allowYourCustomersVisitOtherStoresOfThisPlatform' />
									</p>
									<Form.Check
										type="checkbox"
										id="custom-switch"
										name='open_shop'
										value={openShopToggle}
										onBlur={handleBlur}
										defaultChecked={openShopToggle}
										className='customCheckbox'
										label={openShopToggle
											?
											<FormattedMessage id='yes' />
											:
											<FormattedMessage id='no' />}
										onChange={(e) => {
											handleChange(e)
											setOpenShopToggle(!openShopToggle)
										}}
									/>
								</li>
								<li className="editProfile-body_content-text">
									<span>
										<FormattedMessage id='descriptionShop' />
									</span>
									<Form.Control
										className={`pe-5  ${touched.description ? "is-touch " : ""} ${
											errors.description && touched.description ? " is-invalid" : ""
										} editProfile-body_content_input editProfile-body_content_description`}
										as="textarea"
										placeholder="Description Shop"
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
								</li>
								{
									user.shop_link && <li className="editProfile-body_content-text">
										<span>
											<FormattedMessage id='shopLink' />
										</span>
										<Form.Control
											className={`pe-5  ${touched.shop_link ? "is-touch " : ""} ${
												errors.shop_link && touched.shop_link ? " is-invalid" : ""
											} editProfile-body_content_input`}
											type="text"
											placeholder="Enter shop link"
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
									</li>
								}
							</ul>
							<div className="editProfile-body_content-socials">
								<div>
									<img
										src={facebook}
										alt="facebook"
									/>
									<Form.Control
										className={`pe-5  ${touched?.shop_facebook ? "is-touch " : ""} ${
											errors?.shop_facebook && touched?.shop_facebook ? " is-invalid" : ""
										} editProfile-body_content_input`}
										type="text"
										placeholder="Enter shop facebook"
										value={shopFacebook}
										name='shop_facebook'
										onBlur={handleBlur}
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
								</div>
								<div>
									<img
										src={viber}
										alt="viber"
									/>
									<Form.Control
										className={`pe-5  ${touched.shop_viber ? "is-touch " : ""} ${
											errors.shop_viber && touched.shop_viber ? " is-invalid" : ""
										} editProfile-body_content_input`}
										type="text"
										placeholder="Enter shop viber"
										value={shopViber}
										name='shop_viber'
										onBlur={handleBlur}
										onChange={(e) => {
											handleChange(e)
											setShopViber(e.target.value)
										}}
									/>
									{errors.shop_viber && touched.shop_viber && (
										<Form.Control.Feedback type="invalid">
											{errors.shop_viber}
										</Form.Control.Feedback>
									)}
								</div>

								<div>
									<img
										src={telegram}
										alt="telegram"
									/>
									<Form.Control
										className={`pe-5  ${touched.shop_telegram ? "is-touch " : ""} ${
											errors.shop_telegram && touched.shop_telegram ? " is-invalid" : ""
										} editProfile-body_content_input`}
										type="text"
										placeholder="Enter shop telegram"
										value={shopTelegram}
										name='shop_telegram'
										onBlur={handleBlur}
										onChange={(e) => {
											handleChange(e)
											setShopTelegram(e.target.value)
										}}
									/>
									{errors.shop_telegram && touched.shop_telegram && (
										<Form.Control.Feedback type="invalid">
											{errors.shop_telegram}
										</Form.Control.Feedback>
									)}
								</div>

								<div>
									<img
										className='editProfile-body_content-socials_instagram'
										src={instagram}
										alt="instagram"
									/>
									<Form.Control
										className={`pe-5  ${touched.socials_links?.shop_instagram ? "is-touch " : ""} ${
											errors.socials_links?.shop_instagram && touched.socials_links?.shop_instagram ? " is-invalid" : ""
										} editProfile-body_content_input`}
										type="text"
										placeholder="Enter shop instagram"
										value={shopInstagram}
										onBlur={handleBlur}
										name='shop_instagram'
										onChange={(e) => {
											handleChange(e)
											setShopInstagram(e.target.value)
										}}
									/>
									{errors.socials_links?.shop_instagram && touched.socials_links?.shop_instagram && (
										<Form.Control.Feedback type="invalid">
											{errors.socials_links?.shop_instagram}
										</Form.Control.Feedback>
									)}
								</div>
							</div>
							<button
								className="editProfile-body_content_button"
								type='submit'
								disabled={(!isValid && dirty) || isLoading}
							>
								<span>
									<FormattedMessage id='save' />
								</span> {isLoading && <LoaderForButton />}
							</button>
							{/*<button*/}
							{/*	className="editProfile-body_content_button"*/}
							{/*	disabled={isLoading}*/}
							{/*	onClick={removeUser}*/}
							{/*>*/}
							{/*	<span>Delete User</span> {isLoading && <LoaderForButton />}*/}
							{/*</button>*/}
						</div>
					</Form>
				)}
			</Formik>
		</>
	)
}

export default EditProfile