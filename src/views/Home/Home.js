import HomeCategory from "./HomeCategory"
import React, {
	useCallback,
	useEffect,
	useMemo,
} from "react"
import {
	useDispatch,
} from "react-redux"
import {
	useGetCategoriesMutation
} from "../../redux/services/categoriesApi"
import Loader from "../../components/Loader/Loader"
import { setCategoriesInList } from "../../redux/slices/categoriesSlice"
import CategoryInpName from "./CategoryInpName"
import { FormattedMessage } from "react-intl";

const Home = () => {
	const [getCategories, {isLoading: isGetCategoriesLoading}] = useGetCategoriesMutation()
	const dispatch = useDispatch()


	const categoriesListArr = useCallback(async () => {
		await getCategories()
	}, [])

	useEffect(() => {
		categoriesListArr()
	}, [])

	return (
		<div className="home">

			<h1 className="home-title">
				<FormattedMessage id='categoryList' />
			</h1>
			{isGetCategoriesLoading ? <Loader /> : <HomeCategory />}
			<CategoryInpName />

		</div>
	)
}

export default Home
