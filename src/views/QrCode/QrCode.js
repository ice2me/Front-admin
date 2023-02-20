import React, { useState } from 'react'
import { FormattedMessage } from "react-intl"
import QRCode from "qrcode.react"
import {
	EXTENSION,
	LINK_FOR_CLIENT
} from "../../utils/constants"
import { useSelector } from "react-redux"
import {
	Button,
	Form
} from "react-bootstrap"
import { PDFDownloadLink } from "@react-pdf/renderer";
import QrCodeGenerationDocument from "./QrCodeGenerationDocument";

const QrCode = () => {
	const {user} = useSelector((state) => state.userStore)
	const [changeFgColorQR, setChangeFgColorQR] = useState('#505160')
	const [changeBgColorQR, setChangeBgColorQR] = useState('#ffffff')
	const [qrCodeURL, setQrCodeURL] = useState(null)

	const fileName = (extension) => {
		return `${user?.shop_name}-QRCode.${extension}`
	}
	const downloadQrHandler = async () => {
		const qrCodeURL = document.getElementById('qrCodeEl')
			.toDataURL("image/png")
			.replace("image/png", "image/octet-stream")
		let aEl = document.createElement("a")
		aEl.href = qrCodeURL;
		aEl.download = fileName(EXTENSION.PNG)
		document.body.appendChild(aEl)
		aEl.click();
		document.body.removeChild(aEl)
	}
	const downloadQrHandlerPDF = async () => {
		const qrCodeURL = document.getElementById('qrCodeEl')
			.toDataURL("image/png")
			.replace("image/png", "image/octet-stream")
		setQrCodeURL(qrCodeURL)
	}

	return (
		<div className="category ">
			<h1 className="category-title">
				<FormattedMessage id='qrCode' />
			</h1>
			<div className='qr-body'>
				<div className="qr-body_wrapper">
					<div className="qr p-1 p-lg-3 d-inline-flex">
						<QRCode
							id="qrCodeEl"
							size={250}
							fgColor={changeFgColorQR}
							bgColor={changeBgColorQR}
							level={'H'}
							includeMargin={true}
							value={`${LINK_FOR_CLIENT}${user?.shop_name}`}
						/>
					</div>
					<div className="qr-body_wrapper">
						<div className='qr-body_wrapper-input'>
							<span>
								<FormattedMessage id='qrColorStyle' />
							</span>
							<Form.Control
								className={`editProfile-body_content_input`}
								type="color"
								placeholder="Change color"
								value={changeFgColorQR}
								name='shop_telegram'
								onChange={(e) => {
									setChangeFgColorQR(e.target.value)
								}}
							/>
						</div>
						<div className='qr-body_wrapper-input'>
							<span>
								<FormattedMessage id='qrColorBgStyle' />
							</span>
							<Form.Control
								className={`editProfile-body_content_input`}
								type="color"
								placeholder="Change color"
								value={changeBgColorQR}
								name='shop_telegram'
								onChange={(e) => {
									setChangeBgColorQR(e.target.value)
								}}
							/>
						</div>
					</div>
				</div>
				<Button
					className='qr-body_download'
					onClick={() => {
						downloadQrHandler()
					}}
				>
					<FormattedMessage id='downloadPNG' />
				</Button>
				<Button
					className='qr-body_download'
					onClick={() => {
						downloadQrHandlerPDF()
					}}
				>
					<FormattedMessage id='createPDF' />
				</Button>
				{qrCodeURL && <div className='qr-body_download-link'>
					<PDFDownloadLink
						document={<QrCodeGenerationDocument
							PDFImageIds={qrCodeURL}
							shopLogo={user?.image_logo}
							shopName={user?.shop_name}
						/>}
						fileName={fileName(EXTENSION.PDF)}
					>
						{({
							blob,
							url,
							loading,
							error
						}) => {
							return loading ? "Loading document..." : <FormattedMessage id='downloadPDF' />
						}}
					</PDFDownloadLink>
				</div>
				}
			</div>
		</div>
	)
}
export default QrCode