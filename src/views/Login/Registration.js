import React from 'react'
import { useIntl } from "react-intl"
import { APP_ROUTE } from "../../utils/constants"
import LoginTextTitle from "./LoginTextTitle"
import RegistrationMobUser from "./RegistrationMobUser"
import { RegistrationUser } from "./RegistrationUser"

const Registration = () => {
	const {formatMessage} = useIntl()
	return (
		<div className='login'>
			<div className='login-wrapper'>
				<LoginTextTitle
					formatMessage={formatMessage}
					navPath={APP_ROUTE.LOGIN}
					statusLogOrReg={'reg'}
				/>
				<RegistrationUser />
			</div >
			<div className='loginMob-wrapper'>
				<RegistrationMobUser />
			</div >
		</div >
	)
}

export default Registration