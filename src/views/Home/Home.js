import { useNavigate } from "react-router-dom"
import { APP_ROUTE } from "../../utils/constants"
import React from "react"
import HomeCarouselScreen from "./HomeCarouselScreen"
import HomeFifthScreen from "./HomeFifthScreen"
import HomeFirstScreen from "./HomeFirstScreen"
import HomeFooterScreen from "./HomeFooterScreen"
import HomeFourthScreen from "./HomeFourthScreen"
import HomeNavBar from "./HomeNavBar"
import HomeSecondScreen from "./HomeSecondScreen"
import HomeSixthScreen from "./HomeSixthScreen"
import HomeThirdScreen from "./HomeThirdScreen"

const Home = () => {
	const navigate = useNavigate()
	const transferSingIn = () => {
		navigate(APP_ROUTE.LOGIN)
	}

	return (
		<div className='home'>
			<div className='home-wrapper'>
				<HomeNavBar transferSingIn={transferSingIn} />
				<HomeFirstScreen />
				<HomeSecondScreen />
				<HomeThirdScreen transferSingIn={transferSingIn} />
				<HomeFourthScreen />
				<HomeFifthScreen />
				<HomeSixthScreen transferSingIn={transferSingIn} />
				<HomeCarouselScreen />
				<HomeFooterScreen />
			</div >
		</div >
	)
}

export default Home
