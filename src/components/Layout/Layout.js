import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar";
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