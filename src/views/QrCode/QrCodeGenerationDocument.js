import React from 'react'
import {
	Document,
	Image,
	Page,
	Text,
	StyleSheet,
	View,
	Link
} from "@react-pdf/renderer";


const QrCodeGenerationDocument = ({
	PDFImageIds,
	shopLogo,
	shopName
}) => {
	const styles = StyleSheet.create({
		// page: {
		// 	width: '100%',
		// 	backgroundColor: "white",
		// 	display: 'block',
		// },
		// view: {
		// 	width: '100%',
		// 	display: 'flex',
		// 	flexDirection: 'row',
		// 	justifyContent: 'center',
		// },
		QRImage: {
			width: '300px',
			height: '300px',
		},
		LogoShop: {
			width: '20px',
			height: '20px'
		},
		theke: {
			fontSize: '10px',
			marginTop: 8
		},
		shop: {
			fontSize: '16px',
			marginLeft: 8
		},
		page: {
			width: '100%',
			flexDirection: "column",
			justifyContent: 'flex-start',
			alignItems: 'center',
			backgroundColor: "white"
		},
		section: {
			margin: 10,
			padding: 10,
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		},
		infoShop: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 8
		}
	})
	return (
		// <Document>
		// 	{
		// 		<Page
		// 			// key={`PageId_${id}`}
		// 			size={'A4'}
		// 			style={styles.page}
		// 		>
		// 			<View style={styles.view}>
		// 				<Image
		// 					allowDangerrousPaths
		// 					src={PDFImageIds}
		// 					style={styles.QRImage}
		// 				/>
		// 			</View>
		// 			<View style={styles.view}>
		// 				<Text style={styles.text}> ff </Text>
		// 			</View>
		// 			<View style={styles.view}>
		// 				<Image
		// 					allowDangerrousPaths
		// 					src={PDFImageIds}
		// 					style={styles.logoTheke}
		// 				/>
		// 			</View>
		// 		</Page>
		// 	}
		// </Document>
		<Document>
			{/** Page defines a single page of content. */}
			<Page
				size="A4"
				style={styles.page}
			>
				<View style={styles.section}>
					<Image
						allowDangerrousPaths
						src={PDFImageIds}
						style={styles.QRImage}
					/>
					<View style={styles.infoShop}>
						<Image
							allowDangerrousPaths
							src={shopLogo}
							style={styles.LogoShop}
						/>
						<Link
							src={shopName}
							target={"_blank"}
						>
							<Text style={styles.shop}>
								{shopName}
							</Text>

						</Link>
					</View>
					<Link
						src={'www.theke.com.ua'}
						target={"_blank"}
					>
						<Text style={styles.theke}>
							theke.com.ua
						</Text>

					</Link>
				</View>
			</Page>
		</Document>
	)
}


export default QrCodeGenerationDocument