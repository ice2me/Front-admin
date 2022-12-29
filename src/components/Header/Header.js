import photo from '../../assets/images/avatar-user.png'
import {
	useSelector
} from "react-redux"

const Header = () => {
	const {user} = useSelector((state) => state.userStore)

	return (
		<div className="header">
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
				Shop Link: <a
				href={`http://localhost:3001/api/link/${user?.shop_name}`}
				target="_blank"
			>{user?.shop_name}</a>
				</span>
		</div>
	)
}

export default Header
