import plus from "../../assets/icons/plus.svg"
import { useIntl } from "react-intl"

const ButtonAdd = ({
	handler,
	title
}) => {
	const { formatMessage } = useIntl()
	return (
		<button
			className='category-addCategory'
			onClick={handler}
		>
			<span
				className='category-addCategory-title'
			>
				{title === 'create' ? 'Створити категорію' : 'Створити Продукт'}
			</span >
			<img
				className='category-addCategory-img'
				src={plus}
				alt="add category"
			/>
		</button >
	)
}

export default ButtonAdd