import {
	useDispatch,
	useSelector
} from "react-redux"
import {
	useIntl
} from "react-intl"
import { useSearchTagMutation } from "../../redux/services/categoriesApi"
import {
	LINK_FOR_CLIENT
} from "../../utils/constants"
import {
	useLocation,
	useNavigate
} from "react-router-dom"
import React, {
	useRef,
	useState
} from "react"
import HeaderDesktop from "./HeaderDesktop"
import HeaderMob from "./HeaderMob"

const Header = () => {
	const {user} = useSelector(state => state.userStore)
	const {tagsList} = useSelector(state => state.categoriesStore)
	const [showClipboard, setShowClipboard] = useState(false)
	const [searchValueArr, setSearchValueArr] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [showSearchWindow, setShowSearchWindow] = useState(false)
	const [searchTag, {isLoading: isSearchTagLoading}] = useSearchTagMutation()
	const targetButton = useRef(null)

	const toggleSearchWindow = () => setShowSearchWindow(!showSearchWindow)

	const copyClipboard = async () => {
		const text = `Відвідати магазин ${user?.shop_name} можна за цим посиланням -> ${LINK_FOR_CLIENT}${user?.shop_name}`
		setShowClipboard(!showClipboard)
		try {
			await navigator.clipboard.writeText(text)
		} catch (err) {
			console.error('Error in copying text: ', err)
		}
		setTimeout(() => {
			setShowClipboard(false)
		}, 1500)
	}
	const searchHandler = async () => {
		await searchTag({
			id: user._id,
			product_name: searchValue
		})
		setSearchValueArr([])
		toggleSearchWindow()
	}

	const windowUserWidth = window?.innerWidth

	return (
		<div className='header'>
			{
				windowUserWidth && windowUserWidth > 992
					?
					<HeaderDesktop
						targetButton={targetButton}
						setSearchValueArr={setSearchValueArr}
						searchValueArr={searchValueArr}
						copyClipboard={copyClipboard}
						showClipboard={showClipboard}
					/>
					:
					<HeaderMob
						targetButton={targetButton}
						setSearchValueArr={setSearchValueArr}
						searchValueArr={searchValueArr}
						copyClipboard={copyClipboard}
						showClipboard={showClipboard}
					/>
			}
		</div >
	)
}

export default Header
