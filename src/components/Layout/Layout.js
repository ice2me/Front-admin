import Header from "../Header/Header"
import Footer from "../Footer/Footer";

export default function Layout({children}) {
	return (
		<>
			<div className="appWrapper">
				<Header/>
				<div className="contentBox">
					{children}
				</div>
				<Footer />
			</div>
		</>
	)
}