import React from 'react'
import { useNavigate } from "react-router-dom"
import { APP_ROUTE } from "../../utils/constants"

const LoginTextTitle = ({formatMessage, navPath, statusLogOrReg}) => {
	const navigate = useNavigate()
	return (
		<div className={`${statusLogOrReg === 'log' ? 'login-text' : 'login-text login-text_left'}`}>
			<h2 className='login-text_content'>
				Онлайн-вітрина Вашого магазину
			</h2 >
			<div className='login-text_block'>
				<span className='login-text_block-title'>
					{statusLogOrReg === 'log' ? 'Ще не маєте акаунту?' : 'Вже маєте акаунт?'}
				</span >
				<button
					className='login-text_block-button'
					onClick={() => navigate(navPath)}
				>
					{statusLogOrReg === 'log' ? formatMessage({id: 'signUp'}) : formatMessage({id: 'signIn'})}
				</button >
			</div >
		</div >
	)
}

export default LoginTextTitle