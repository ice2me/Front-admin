import {
	useState
} from "react"
import {
	usePatchAvailableItemProductMutation
} from "../../redux/services/categoriesApi"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"
import CardItem from "./CardItem"

const Card = ({
	setEditItemProductCard,
	showModalCard,
	setIdItemProductCard
}) => {

	const [availableProduct, setAvailableProduct] = useState(true)
	const {items, categories} = useSelector(state => state.categories)
	const [patchAvailableItemProduct, {isLoading: isPatchAvailableItemProductLoading}] = usePatchAvailableItemProductMutation()

	const availableCheckedProduct = async (id, availableItem) => {
		try {
			const {data} = await patchAvailableItemProduct({
				id: id,
				body: {
					available_product: availableItem
				}
			})
			// toast(data?.message)
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<>
			{
				items?.map((item) => <CardItem
						key={item._id}
						item={item}
						isPatchAvailableItemProductLoading={isPatchAvailableItemProductLoading}
						setAvailableProduct={setAvailableProduct}
						availableCheckedProduct={availableCheckedProduct}
						showModalCard={showModalCard}
						setIdItemProductCard={setIdItemProductCard}
						setEditItemProductCard={setEditItemProductCard}
					/>
				)
			}
		</>
	)
}

export default Card
