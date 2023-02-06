import React from 'react'
import {
	Button,
	Modal
} from "react-bootstrap"
import {
	useDeleteCategoryMutation,
	useDeleteItemProductMutation,
} from "../../redux/services/categoriesApi"
import { toast } from "react-toastify"
import { FormattedMessage } from "react-intl";
import Loader from "../Loader/Loader";

const ModalDelete = ({
	show,
	onHide,
	content
}) => {
	const [deleteItemProduct, {isLoading: isDeleteItemProduct}] = useDeleteItemProductMutation()
	const [deleteCategory, {isLoading: isDeleteCategoryLoader}] = useDeleteCategoryMutation()
	const isLoading = isDeleteItemProduct || isDeleteCategoryLoader

	const deleteHandler = async (id) => {
		try {
			if (content.where === 'product') {
				const {data} = await deleteItemProduct(id)
				// toast(data?.message)
				onHide(false)
			}
			if (content.where === 'category') {
				const {data} = await deleteCategory(id)
				// toast(data?.message)
				onHide(false)
			}
		} catch (e) {
			console.log(e)
		}
	}

	if (isLoading) {
		return <Loader />
	}

	return (
		<Modal
			show={show}
			onHide={onHide}
			aria-labelledby="contained-modal-title-vcenter"
			centered
			backdrop="static"
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					<FormattedMessage id='delete' />
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					<FormattedMessage id='youWantDeleteProduct' /> <b>{content?.name}</b> ?
				</p>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant='danger'
					className='d-inline-flex'
					style={{
						maxHeight: '33px',
						display: 'flex',
						alignItems: 'center'
					}}
					onClick={() => deleteHandler(content.id)}
				>
					<FormattedMessage id='delete' />
				</Button>
				<Button onClick={() => onHide(false)}>
					<FormattedMessage id='close' />
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default ModalDelete