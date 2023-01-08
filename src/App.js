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
import {
	useEffect,
	useState
} from "react"
import 'react-toastify/dist/ReactToastify.css'
import { AuthContext } from "./context/auth.context"
import { useLoginMutation } from "./redux/services/authApi"
import { logout as logoutAction } from "./redux/slices/userSlice"
import Loader from "./components/Loader/Loader"
import { LOCALES } from "./i18n/locales"
import messages from "./i18n/messages/index"
import { IntlProvider } from "react-intl"

function App() {
	const [languageLocal, setLanguageLocal] = useState(LOCALES.UKR)
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


	useEffect(() => {
		if (isLogin) <Loader />
		if (window.navigator.language === LOCALES.EN) {
			setLanguageLocal( LOCALES.EN)
		} else {
			setLanguageLocal( LOCALES.UKR)
		}
	}, [isLogin])

	return (
		<div className="app">
			<IntlProvider
				locale={languageLocal}
				messages={messages[languageLocal]}
				defaultLocale={LOCALES.EN}
			>
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
			</IntlProvider>
		</div>
	)
}

export default App
