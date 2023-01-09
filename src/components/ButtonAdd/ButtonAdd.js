import plus from "../../assets/icons/plus.svg"
import { useIntl } from "react-intl"

const ButtonAdd = ({
	handler,
	title
}) => {
	const { formatMessage } = useIntl()
	return (
		<button
			className='home-addCategory'
			onClick={handler}
		>
			<img
				src={plus}
				alt="add category"
			/>
			<span data-button={`${formatMessage({id: 'create'})} ${title}`} onClick={handler}></span>
		</button>
	)
}

export default ButtonAdd