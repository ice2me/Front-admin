import photo from '../../assets/images/avatar-user.png'
import thekeLogo from '../../assets/images/theke-logo-white.png'
import {
	useDispatch,
	useSelector
} from "react-redux"
import { FormattedMessage } from "react-intl";
import exit from "../../assets/icons/logout.svg";
import { logout } from "../../redux/slices/userSlice";
import { APP_ROUTE } from "../../utils/constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const {user} = useSelector((state) => state.userStore)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const logoutHandler = () => {
		dispatch(logout())
		navigate(APP_ROUTE.DEFAULT)
		toast('Your exit')
	}
	return (
		<div className="header">
			<img
				className='header-left_theke'
				src={thekeLogo}
				alt="company logo theke"
			/>
			<div className="header-left">
				<div
					className='header-left_logo'
					style={
						user.image_logo
							?
							{backgroundImage: `url(${user.image_logo})`}
							:
							{backgroundImage: `url(${photo})`}
					}
				>
				</div>
				<span className="header-left_status">
					{user?.shop_name}
				</span>
			</div>
			<span className='header-link'>
				<FormattedMessage id='shopLink' />
				<a
				href={`http://localhost:3001/api/link/${user?.shop_name}`}
				target="_blank"
			>{user?.shop_name}</a>
				</span>
			<button
				onClick={logoutHandler}
				className="header-left_logout"
			>
				<img
					src={exit}
					alt="exit"
					title="Log Out"
				/>
				Log Out
			</button>
		</div>
	)
}

export default Header
