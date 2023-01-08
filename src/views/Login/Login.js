import { Tab, Tabs } from "react-bootstrap"
import { SignIn } from "./SignIn"
import { SignUp } from "./SignUp"
import { useIntl } from "react-intl";

const Login = () => {
	const { formatMessage } = useIntl()
	return (
		<div className='login'>
			<div className='login-wrapper'>
				<Tabs
					defaultActiveKey='Sign In'
					id="fill-tab-example"
					fill
				>
					<Tab
						eventKey="Sign In"
						title={formatMessage ({id: 'signIn'})}
						className='h-100'
					>
						<SignIn />
					</Tab >
					<Tab
						eventKey="Sign Up"
						title={formatMessage ({id: 'signUp'})}
						className='h-100'
					>
						<SignUp/>
					</Tab >
				</Tabs >
			</div >
		</div >
	);
};

export default Login;
