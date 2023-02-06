import {
	Dropdown,
	DropdownButton,
} from "react-bootstrap"
import editDot from "../../assets/icons/dotsEdit.svg"
import React, { useState } from "react"
import deleteCard from "../../assets/icons/delete.svg"
import editPen from "../../assets/icons/pencilEdit.svg"
import ModalDelete from "../Modal/ModalDelete";
import ModalSaveCategory from "../Modal/ModalSaveCategory"
import { FormattedMessage } from "react-intl";

const DropdownEdit = ({
	categoryName,
	id
}) => {

	const [modalDeleteShow, setModalDeleteShow] = useState(false)
	const [showModalEdit, setShowModalEdit] = useState(false)

	const handleCloseModalEdit = () => setShowModalEdit(false)
	const handleShowModalEdit = () => setShowModalEdit(true)
	const showModalDelete = () => setModalDeleteShow(true)
	const hideModalDelete = () => setModalDeleteShow(false)
	const stopPropagation = (e) => e.stopPropagation()

	return (
		<>
			<ModalSaveCategory
				show={showModalEdit}
				handleClose={handleCloseModalEdit}
				categoryNameEdit={{
					name: categoryName,
					id: id
				}}
			/>

			<ModalDelete
				show={modalDeleteShow}
				onHide={hideModalDelete}
				content={{
					name: categoryName,
					id: id,
					where: "category"
				}}
			/>

			<DropdownButton
				id="dropdown-item-button"
				className='dropdownEdit'
				onClick={stopPropagation}
				title={
					<img
						src={editDot}
						alt="edit category"
					/>
				}
			>
				<Dropdown.Item
					as="button"
					onClick={handleShowModalEdit}
				>
					<img
						src={editPen}
						alt="edit category"
					/>
					<span><FormattedMessage id='edit' /></span>
				</Dropdown.Item>
				<Dropdown.Item
					as="button"
					onClick={showModalDelete}
				>
					<img
						src={deleteCard}
						alt="delete category"
					/>
					<span><FormattedMessage id='delete' /></span>
				</Dropdown.Item>
			</DropdownButton>
		</>
	)
}

export default DropdownEdit