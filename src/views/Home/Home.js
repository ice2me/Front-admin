import {
	Button,
	Navbar
} from "react-bootstrap"
import thekeLogo from '../../assets/images/theke_logo-small.png'
import blockX from '../../assets/images/blockX.png'
import checkedImg from '../../assets/images/checked.png'
import { useNavigate } from "react-router-dom";
import { APP_ROUTE } from "../../utils/constants";

const Home = () => {
	const navigate = useNavigate()
	const transferSingIn = () => {
		navigate(APP_ROUTE.LOGIN)
	}
	return (
		<div className='home'>
			<div className="home-wrapper">
				<Navbar
					sticky="top"
					className="home-navbare"
				>
					<img
						src={thekeLogo}
						alt="theke Logo"
					/>
					<div className='home-navbare_buttons'>
						<Button
							variant="primary"
							onClick={transferSingIn}
						>
							Sing Up
						</Button>
					</div>
				</Navbar>

				<div className="home-firstBlock">
					<div className="home-firstBlock_title">
						<h1>
							Stop prepping.<br />
							Start doing.
						</h1>
						<p>
							Create your online store easily and start earning today.
						</p>
						<button>
							Learn more
						</button>
					</div>
					<div className="home-firstBlock_image"></div>
				</div>
				<div className="home-secondBlock">
					<div className="home-secondBlock_image"></div>
					<div className="home-secondBlock_title">
						<h2>
							Tired of not doing<br />
							what's important.
						</h2>
						<ul className='home-secondBlock_list'>
							<li className="home-secondBlock_list-li">
								<img
									src={blockX}
									alt="x"
								/>
								<span>
									line one
								</span>
							</li>
							<li className="home-secondBlock_list-li">
								<img
									src={blockX}
									alt="x"
								/>
								<span>
									line two
								</span>
							</li>
							<li className="home-secondBlock_list-li">
								<img
									src={blockX}
									alt="x"
								/>
								<span>
									line there
								</span>
							</li>
							<li className="home-secondBlock_list-li">
								<img
									src={blockX}
									alt="x"
								/>
								<span>
									line four
								</span>
							</li>
						</ul>
						<button onClick={transferSingIn}>
							Sing Up
						</button>
					</div>
				</div>
				<div className="home-thirdBlock">
					<div className="home-thirdBlock_left">
						<h2 className="home-thirdBlock_left-title">
							There`s a better way.
						</h2>
						<ul className="home-thirdBlock_left-list">
							<li className="home-thirdBlock_left-list_li">
								<img
									src={checkedImg}
									alt="checked image"
								/>
								<span>
									Lorem ipsum dolor sit amet.
								</span>
							</li>
							<li className="home-thirdBlock_left-list_li">
								<img
									src={checkedImg}
									alt="checked image"
								/>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipisicing.
								</span>
							</li>
							<li className="home-thirdBlock_left-list_li">
								<img
									src={checkedImg}
									alt="checked image"
								/>
								<span>
									Lorem ipsum dolor sit amet, consectetur.
								</span>
							</li>
						</ul>
						<button
							className="home-thirdBlock_left-button"
							onClick={transferSingIn}
						>
							Sign Up
						</button>
					</div>
					<div className="home-thirdBlock_right"></div>
				</div>
			</div>
		</div>
	)
}

export default Home
