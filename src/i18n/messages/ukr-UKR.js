import { LOCALES } from "../locales"

export default {
	[LOCALES.UKR]: {
		// ******************************************************** registration and login
		signIn: "Увійти",
		signUp: "Зареєструватися",
		save: 'Зберегти',
		email: 'Електронна Пошта: ',
		password: 'Пароль: ',
		name: "Ім'я: ",
		enterName: "Введіть ім'я",
		enterEmail: 'Введіть Електронну Адресу',
		mobilePhone: 'Мобільний Телефон: ',
		enterMobilePhone: 'Введіть Мобільний Телефон',
		enterPassword: 'Введіть Пароль',
		passwordConfirm: 'Підтвердження Пароля: ',
		enterPasswordConfirm: 'Введіть Пароль Для Підтвердження',
		nameShop: "Ім'я {total}: ",
		enterNameShop: 'Введіть Назву',
		descriptionShop: 'Опис {total}: ',
		enterDescriptionShop: 'Введіть Опис',
		allowYourCustomersVisitOtherStoresOfThisPlatform : ' Дозволити вашим клієнтам відвідувати інші магазини цієї платформи?',
		yes: "Так",
		no: "Ні",
		iWantShop: 'Я хочу {total}',
		iWantMenu: 'Я хочу {total}',
		ifYouChooseShopYourCustomers: 'Якщо ви вибираєте Shop - ваші клієнти зможуть робити онлайн замовлення!',
		ifYouChooseMenuYourCustomers: 'Якщо ви вибираєте Menu - ваші клієнти НЕ зможуть робити онлайн замовлення!',
		shopLink: "Посилання на {total}: ",
		enterEnterShopLink: 'https://...',
		shopFacebook: "Facebook {total} ",
		enterEnterShopFacebook: "Введіть Facebook",
		shopViber: "Viber {total} ",
		enterEnterShopViber: "Введіть Viber",
		shopTelegram: 'Telegram {total} ',
		enterEnterShopTelegram: "Введіть Telegram",
		shopInstagram: "Instagram {total} ",
		enterEnterShopInstagram: "Введіть Instagram",
		Shop: 'Магазин',
		Menu: 'Меню',
		// ******************************************************** Navbare
		myProducts: 'Мої товари',
		myProfile: 'Мій профіль',
		contactSupport: 'Служба підтримки',
		share: 'Поділіться',
		qrCode: 'QR Код',
		// ******************************************************** form validation
		nameIsRequiredField: "Ім'я є обов'язковим полем",
		usernameLengthMax: "Ім'я користувача має містити не більше 65 символів",
		usernameLengthMin: 'Ім’я користувача має містити щонайменше 3 символи',
		mobileIsRequiredField: "Мобільний телефон є обов’язковим для заповнення",
		mobileNumberIsNotValid: "Номер мобільного телефону недійсний",
		emailIsRequiredField: 'Поле електронної пошти є обов’язковим для заповнення',
		emailMustBeValidEmail: 'Електронна адреса має бути дійсною',
		passwordIsRequiredField: "Пароль є обов'язковим полем",
		passwordIsRequiredFieldLengthMin: 'Пароль має бути не менше 6 символів',
		passwordConfirmIsRequiredField: "Поле підтвердження пароля є обов’язковим",
		passwordConfirmIsRequiredFieldLengthMin: 'Підтвердження пароля має містити не менше 6 символів',
		shopNameLengthMax: 'Назва магазину має містити не більше 65 символів',
		shopNameLengthMin: 'Назва магазину має містити щонайменше 3 символи',
		shopDescriptionLengthMax: 'Опис магазину має містити не більше 3500 символів',
		shopLinkLengthMax: 'Посилання на магазин має містити не більше 65 символів',
		shopLinkLengthMin: 'Посилання на магазин має бути не менше 3 символів',
		pleaseEnterValidShopWebsite: 'Введіть дійсний веб-сайт магазину',
		pleaseEnterValidFacebookProfile: 'Введіть дійсний профіль Facebook',
		pleaseEnterValidViberProfile: 'Введіть дійсний номер Viber',
		pleaseEnterValidTelegramProfile: 'Введіть дійсний профіль Telegram',
		pleaseEnterValidInstagramProfile: 'Введіть дійсний профіль Instagram',
		// ******************************************************** Category
		createShopOrMenu: 'Створіть свій магазин або меню',
		create: 'Додати',
		// ******************************************************** Modal
		close: 'Закрити',
		addCategory: 'Зберегти',
		delete: 'Видалити',
		youWantDeleteProduct: 'Ви впевнені, що хочете видалити: ',
		// ******************************************************** Category
		category: 'Категорію',
		createCategory: 'Створити категорію',
		noCategory: 'Немає категорий',
		categoryList: 'Список категорій',
		editCategoryName: 'Редагувати назву категорії',
		enterCategoryName: 'Введіть назву категорії',
		edit: 'Редагувати',
		// ******************************************************** Card
		product: 'Продукт',
		createProductCard: 'Немає товарів',
		editProductCard: 'Редагувати картку товару',
		deleteProductCard: 'Видалити картку продукту',
		unitFor: 'За {unit}: ',
		price: 'Ціна: ',
		available: 'В наявності: ',
		addPhotoProduct: 'Додати фото товару',
		addProductCard: 'Додати картку продукту',
		nameProduct: 'Назва продукту',
		nameEnterProduct: 'Введіть назву продукту',
		enterDescription: 'Опис продукту',
		enterProductDescription: 'Введіть опис товару',
		unitsProduct: 'Одиниця виміру',
		priceProduct: 'Ціна товару',
		priceEnterProduct: 'Введіть ціну товару',
		currencyProduct: 'Валюта продукту',
		availableProduct: 'В наявності',
		kilogram: 'кілограм',
		gram: 'грам',
		liter: 'літр',
		milliliter: 'мілілітр',
		piece: 'шт.',
		loremText: 'це текст-"риба", що часто використовується в пресі та веб-дизайні. Lorem Ipsum є стандартною "рибою" для текстів на латиниці з початку XVI ст. На той час якийсь безіменний друкар створив велику колекцію розмірів і форм шрифтів, використовуючи Lorem Ipsum для друку зразків. Lorem Ipsum не лише успішно пережив без помітних змін п\'ять століть, а й переступив до електронного дизайну.',
		// ******************************************************** Contact Support
		contactSupportMessage: 'Якщо у вас є питання, проблеми та пропозиції',
		contactSupportMessage2: 'щодо покращення - ви можете написати мені.',
		// ******************************************************** Profile
		profile: 'Профіль',
		editProfile: 'Редагувати профіль',
		// ******************************************************** HOME
		createAnOnlineShowcaseForYourStore: 'Онлайн-вітрина',
		createAnOnlineShowcaseForYourStore1: 'Вашого магазину',
		getStarted: 'Розпочати',
		startDoing: 'Просто та швидко',
		createYourOnlineStoreEasilyStartEarningToday: 'Створи онлайн-магазин  та активуй ваш бізнес в інтернеті',
		learnMore: 'Дізнатися більше',
		tiredOfNotDoing: 'Чому Theke сприятиме',
		whatImportant: "розвитку вашого магазину?",
		yourBusinessNotOnline: 'У вас буде зручна і сучасна інтернет-сторінка',
		yourCustomerBaseIsNotGrowing: 'Вашим клієнтам буде зручно робити замовлення',
		youCannotQuicklyPresentYourProductClient: 'Ваша клієнтська база зростатиме',
		youSpendLotTimeTakingOrdersFromEachClient: 'Опрацювання замовлень займатиме мінімум часу',
		theresBetterWay: 'Theke - найкращий варіант онлайн-платформи для Вашого бізнесу',
		easeOfUse: 'Ваші клієнти бачать тільки Ваші товари і не ходять по інших магазинах',
		speed: 'Простота наповнення Вашої сторінки - Вам не потрібно додаткових знань',
		benefit: 'Відсутні комісії за продаж через платформу',
		fastCommunicationWithClients: 'Постійна підтримка технічної служби',
		seeHowItWorks: 'Дивись, як це працює',
		howItWorks: 'Як це працює?',
		step1: 'Крок 1',
		createCategoryFillWithProductCards: 'Створюємо Ваш магазин та наповнюємо Вашими товарами по категоріях',
		step2: 'Крок 2',
		sendLinkYourStoreYourCustomersConvenientWay: 'Ви надсилаєте посилання на зручну сторінку із актуальним описом та фото товарів Вашим клієнтам ',
		step3: 'Крок 3',
		theClientClicksOnYourLinkAndMakesOrderYourStore: 'Клієнти роблять замовлення, яке відразу надходить вам та дублюється клієнту на пошту. Клієнти рекомендують Ваш магазин ',
		becomeTheke: 'Підписка на Theke',
		cost: 'Вартість:',
		priceTheke: '$39/місяць',
		subscribeThekeAndGetYourBusinessGrowingRightNow: 'Підпишись на Theke та отримай розвиток свого бізнесу саме зараз',
		viewPlansDetails: 'Переглянути деталі планів',
		firstMonthIsFree: 'Перший місяц Безкоштовно !!!',
		customerReviews: 'Відгуки клієнтів',
		whatIsTheke: 'Що таке Theke?',
		// ******************************************************** QR Code
		qrColorStyle: 'Змінити колір',
		qrColorBgStyle: 'Змінити колір фону',
		downloadPNG: 'Завантажити в PNG',
		createPDF: 'Створити PDF',
		downloadPDF: 'Завантажити в PDF',
	}
}
