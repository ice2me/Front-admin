import ButtonAdd from "../../components/ButtonAdd/ButtonAdd"
import { useState } from "react"
import ModalSaveCategory from "../../components/Modal/ModalSaveCategory"
import { useIntl } from "react-intl";

const CategoryInpName = () => {
	const [show, setShow] = useState(false)
	const { formatMessage } = useIntl()

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
				title={formatMessage({id: 'category'})}
			/>
		</>
	)
}

export default CategoryInpName