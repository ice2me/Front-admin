import { useNavigate } from "react-router-dom"
import { APP_ROUTE } from "../../utils/constants"
import LoginMobUser from "./LoginMobUser"
import LoginTextTitle from "./LoginTextTitle"
import { LoginUser } from "./LoginUser"
import { useIntl } from "react-intl"

const Login = () => {
	const {formatMessage} = useIntl()
	const navigate = useNavigate()

	return (
		<div className='login'>
			<div className='login-wrapper'>
				<LoginTextTitle
					formatMessage={formatMessage}
					navPath={APP_ROUTE.REGISTRATION}
					statusLogOrReg={'log'}
				/>
				<LoginUser />
			</div >
			<div className='loginMob-wrapper'>
				<LoginMobUser />
			</div >
		</div >
	)
}

export default Login
