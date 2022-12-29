import React, { useState } from 'react';
import {
	Button,
	Form,
	Modal
} from "react-bootstrap";
import LoaderForButton from "../Loader/LoaderForButton";
import {
	useCreateCategoriesMutation,
	useUpdateCategoryNameMutation
} from "../../redux/services/categoriesApi";
import { toast } from "react-toastify";

const ModalSaveCategory = ({
	show,
	handleClose,
	categoryNameEdit,
	isEdit
}) => {
	const [categoryName, setCategoryName] = useState('')
	const [createCategories, {isLoading: isCreateCategoriesLoading}] = useCreateCategoriesMutation()
	const [updateCategoryName, {isLoading: isUpdateCategoryNameLoader}] = useUpdateCategoryNameMutation()

	const isLoading = isUpdateCategoryNameLoader || isCreateCategoriesLoading

	const handlerSaveCategory = async (e) => {
		e.stopPropagation()
		if (isEdit) {
			try {
				const {data} = await updateCategoryName({
					id: categoryNameEdit.id,
					body: {category_name: categoryName}
				})
				toast(data?.message)
				handleClose()
			} catch (e) {
				console.log(e)
			}
		} else {
			if (categoryName) {
				try {
					await createCategories({category_name: categoryName})
					handleClose()
				} catch (e) {
					console.log(e)
				}
			}
		}

	}
	return (
		<Modal
			show={show}
			onHide={handleClose}
			centered={true}
		>
			<Modal.Header closeButton>
				<Modal.Title>Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form.Control
					type="text"
					placeholder="Enter category name"
					name='name_product'
					defaultValue={isEdit && categoryNameEdit?.name}
					onChange={e => setCategoryName(e.target.value)}
					autoFocus='on'
					autoComplete='off'
				/>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="secondary"
					onClick={handleClose}
				>
					Close
				</Button>
				<Button
					variant="primary"
					onClick={handlerSaveCategory}
					style={{
						maxHeight: '33px',
						display: 'flex',
						alignItems: 'center'
					}}
				>
					{isLoading ? <LoaderForButton /> : 'Add Category'}
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalSaveCategory;