import { useSelector } from "react-redux"
import Header from "../Header/Header"
import Sidebar from "../Navbar/Sidebar"

export default function Layout({children}) {
	const {user} = useSelector((state) => state.userStore)
	return (
		<div className="appWrapper">
			<div className="contentBox">
				{
					user?.created_shop && <Header />
				}
				<div className="contentBox-children">
					{user?.created_shop && <Sidebar />}
					{children}
				</div>
			</div>
		</div>
	)
}