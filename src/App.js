import {
	RoutesLink,
	RoutesLinkLogin
} from "./routes"
import Layout from "./components/Layout/Layout"
import { ToastContainer } from "react-toastify"
import {
	useDispatch,
	useSelector
} from "react-redux"
import { useEffect } from "react"
import 'react-toastify/dist/ReactToastify.css'
import { AuthContext } from "./context/auth.context"
import { useLoginMutation } from "./redux/services/authApi"
import { logout as logoutAction } from "./redux/slices/userSlice"
import Loader from "./components/Loader/Loader"

function App() {
	const {
		userStore: {
			user,
			token,
			isLogin
		}
	} = useSelector((state) => ({userStore: state.userStore}))
	const dispatch = useDispatch()
	const logout = () => dispatch(logoutAction())
	const [login] = useLoginMutation()
	const isAuthenticated = Boolean(token)

	console.log('000000')

	useEffect(() => {
		isLogin && <Loader />
	}, [isLogin])

	return (
		<div className="app">
			<AuthContext.Provider
				value={ {
					token,
					login,
					logout,
					user,
					isAuthenticated
				} }
			>
				<ToastContainer position='top-right' />
				{
					(isAuthenticated && user?.email && token)
						? <Layout>
							<RoutesLink />
						</Layout>
						: <RoutesLinkLogin />
				}
			</AuthContext.Provider>
		</div>
	)
}

export default App
