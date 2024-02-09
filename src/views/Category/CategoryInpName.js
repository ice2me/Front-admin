import ButtonAdd from "../../components/ButtonAdd/ButtonAdd"
import { useState } from "react"
import ModalSaveCategory from "../../components/Modal/ModalSaveCategory"
import { useIntl } from "react-intl";

const CategoryInpName = () => {
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
		<>
			<ModalSaveCategory
			show={show}
			handleClose={handleClose}
			/>
			<ButtonAdd
				handler={handleShow}
				title={'create'}
			/>
		</>
	)
}

export default CategoryInpName