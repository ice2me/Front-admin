import {
	useDispatch,
	useSelector
} from "react-redux"
import {
	useIntl
} from "react-intl"
import { useSearchProductMutation, useSearchTagMutation } from "../../redux/services/categoriesApi"
import { toggleSearchWindow } from "../../redux/slices/categoriesSlice"
import {
	LINK_FOR_CLIENT
} from "../../utils/constants"
import {
	useLocation,
	useNavigate
} from "react-router-dom"
import React, {
	useEffect,
	useRef,
	useState
} from "react"
import HeaderDesktop from "./HeaderDesktop"
import HeaderMob from "./HeaderMob"

const Header = () => {
	const {user} = useSelector(state => state.userStore)
	const {statusSearchWindow} = useSelector(state => state.categoriesStore)
	const [showClipboard, setShowClipboard] = useState(false)
	const [searchValueArr, setSearchValueArr] = useState([])
	const [searchProduct, {isLoading: isSearchProductLoading}] = useSearchProductMutation()
	const targetButton = useRef(null)
	const dispatch = useDispatch()

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
		const searchDate = searchValueArr[0]
		await searchProduct({
			id: user._id,
			product_name: searchDate
		})
		dispatch(toggleSearchWindow(true))
	}

	useEffect(() => {
		if (searchValueArr?.length > 0) searchHandler()
	}, [searchValueArr])
	useEffect(() => {
		if (statusSearchWindow === false) setSearchValueArr([])
	}, [statusSearchWindow])

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
