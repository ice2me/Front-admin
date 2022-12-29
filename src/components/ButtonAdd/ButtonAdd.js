import plus from "../../assets/icons/plus.svg";

const ButtonAdd = ({
	handler,
	title
}) => {
	return (
		<button
			className='home-addCategory'
			onClick={handler}
		>
			<img
				src={plus}
				alt="add category"
			/>
			<span data-button={`Create ${title}`} onClick={handler}></span>
		</button>
	);
};

export default ButtonAdd