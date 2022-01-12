export default{
	state: {
		cart: [],
		location_user: [],
		// GOLD
		referensi_price: null,
		scrap_calculator: [],
		// SILVER
		referensi_price_silver_925: 0,
		referensi_price_silver_500: 0,
		scrap_calculator_silver: [],
	},
	getters: {
		getCart(state){
			return state.cart
		},
		getCartTotal(state){
			let total = 0 
			for (let i = 0; i < state.cart.length; i++){
				total += state.cart[i].price
			}
			return total
		},
		getLocationUser(state){
			return state.location_user
		},
		// GOLD
		getReferensiPrice(state) {
			return state.referensi_price
		},
		getScrapCalculator(state) {
			return state.scrap_calculator
		},
		getScrapCalculatorGramTotal(state){
			let total = 0
			for (let i = 0; i < state.scrap_calculator.length; i++){
				total += state.scrap_calculator[i].gram
			}
			return total
		},
		getScrapCalculatorCaratTotal(state){
			let total = 0
			for (let i = 0; i < state.scrap_calculator.length; i++){
				total += (state.scrap_calculator[i].gram * state.scrap_calculator[i].carat) 
			}
			return total
		},
		getScrapCalculatorPercentTotal(state){
			let total = 0
			for (let i = 0; i < state.scrap_calculator.length; i++){
				total += state.scrap_calculator[i].percent
			}
			return total.toFixed(3)
		},
		getScrapCalculatorPriceTotal(state){
			let total = 0
			for (let i = 0; i < state.scrap_calculator.length; i++){
				total += state.scrap_calculator[i].total
			}
			return total
		},

		// SILVER
		getReferensiPriceSilver925(state) {
			return state.referensi_price_silver_925
		},
		getReferensiPriceSilver500(state) {
			return state.referensi_price_silver_500
		},
		getScrapCalculatorSilver(state) {
			return state.scrap_calculator_silver
		},
		getScrapCalculatorGramTotalSilver(state){
			let total = 0
			for (let i = 0; i < state.scrap_calculator_silver.length; i++){
				total += state.scrap_calculator_silver[i].gram
			}
			return total
		},
		getScrapCalculatorPriceTotalSilver(state){
			let total = 0
			for (let i = 0; i < state.scrap_calculator_silver.length; i++){
				total += state.scrap_calculator_silver[i].total
			}
			return total
		},

	},
	mutations: {
		setCart(state, payload){
			state.cart = payload
		},
		setLocationUser(state, payload){
			state.location_user = payload
		},
		setDeleteCart(state, payload){
			let record = false
			record = state.cart.findIndex(prms=>prms.id == payload)
			if (record != -1) {
				state.cart.splice(record,1)
			}else{
				console.log('Data not found')
			}
		},

		// GOLD
		setReferensiPrice(state, payload){
			state.referensi_price = payload
		},
		setScrapCalculator(state, payload){
			state.scrap_calculator = payload
		},
		setResetCalculator(state, payload){
			state.scrap_calculator = []
		},
		setDeleteCalculator(state, payload){
			let record = false
			record = state.scrap_calculator.findIndex(prms=>prms.id == payload)
			if (record != -1) {
				state.scrap_calculator.splice(record,1)
			}else{
				console.log('Data not found')
			}
		},

		// SILVER
		setReferensiPriceSilver925(state, payload){
			state.referensi_price_silver_925 = payload
		},
		setReferensiPriceSilver500(state, payload){
			state.referensi_price_silver_500 = payload
		},
		setScrapCalculatorSilver(state, payload){
			state.scrap_calculator_silver = payload
		},
		setResetCalculatorSilver(state, payload){
			state.scrap_calculator_silver = []
		},
		setDeleteCalculatorSilver(state, payload){
			let record = false
			record = state.scrap_calculator_silver.findIndex(prms=>prms.id == payload)
			if (record != -1) {
				state.scrap_calculator_silver.splice(record,1)
			}else{
				console.log('Data not found')
			}
		},
		setResetCart(state, payload){
			state.cart = []
		}
	}
}