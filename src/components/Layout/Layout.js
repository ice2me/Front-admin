import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar";

export default function Layout({children}) {
	return (
		<div className="appWrapper">
			<div className="contentBox">
				<Navbar />
				<div className="contentBox-children">
					<Header />
					{children}
				</div>
			</div>
		</div>
	)
}