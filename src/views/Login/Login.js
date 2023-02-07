import { Tab, Tabs } from "react-bootstrap"
import { LoginUser } from "./LoginUser"
import { RegistrationUser } from "./RegistrationUser"
import { useIntl } from "react-intl";

const Login = () => {
	const { formatMessage } = useIntl()
	return (
		<div className='login'>
			<div className='login-wrapper'>
				<Tabs
					defaultActiveKey='RegistrationUser'
					id="fill-tab-example"
					fill
				>
					<Tab
						eventKey="LoginUser"
						title={formatMessage ({id: 'signIn'})}
						className='h-100'
					>
						<LoginUser />
					</Tab >
					<Tab
						eventKey="RegistrationUser"
						title={formatMessage ({id: 'signUp'})}
						className='h-100'
					>
						<RegistrationUser/>
					</Tab >
				</Tabs >
			</div >
		</div >
	);
};

export default Login;
