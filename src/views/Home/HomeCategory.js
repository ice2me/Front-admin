import { useSelector } from "react-redux"
import React, {} from "react"
import DropdownEdit from "../../components/DropdownEdit/DropdownEdit";
import { useNavigate } from "react-router-dom";
import { APP_ROUTE } from "../../utils/constants";
import arrowDown from "../../assets/icons/arrowDown.svg"
import { FormattedMessage } from "react-intl";


const HomeCategory = () => {
	const {categories} = useSelector(state => state.categories)
	const categoriesList = categories || []
	const navigate = useNavigate()
	const openProductList = (categoryId, categoryName) => navigate(APP_ROUTE.PRODUCTS_LIST, {
		state: {
			id: categoryId,
			name: categoryName
		}
	})

	return (
		<>
			{
				categoriesList.length < 1
				&&
				<h1 className="productList-arrowDown">
					<FormattedMessage id='createCategory' />
					<img
						src={arrowDown}
						alt="arrow down"
					/>
				</h1>
			}
			<div className='home-body_wrapper'>
				{
					categoriesList?.map((category, index) => <div
							key={category?._id}
						>
							<div className="home-body_accordingHeader">
							<span
								onClick={() => openProductList(category?._id, category?.category_name)}
							>
								{category?.category_name}
							</span>
								<DropdownEdit
									categoryName={category?.category_name}
									id={category?._id}
								/>
							</div>
						</div>
					)
				}
			</div>
		</>
	)

}

export default HomeCategory
