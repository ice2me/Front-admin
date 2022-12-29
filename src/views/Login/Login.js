import { Tab, Tabs } from "react-bootstrap"
import { SignIn } from "./SignIn"
import { SignUp } from "./SignUp"

const Login = () => {
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
						title="Sign In"
						className='h-100'
					>
						<SignIn />
					</Tab >
					<Tab
						eventKey="Sign Up"
						title="Sign Up"
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
