import Header from "../Header/Header"
import Sidebar from "../Navbar/Sidebar"

export default function Layout({children}) {
	return (
		<div className="appWrapper">
			<div className="contentBox">
				<Header />
				<div className="contentBox-children">
					<Sidebar />
					{children}
				</div>
			</div>
		</div>
	)
}