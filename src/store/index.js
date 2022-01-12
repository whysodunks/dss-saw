import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import general from './modules/general.js'
import dss from './modules/dss.js'

Vue.use(Vuex)
// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	strict: true,
	modules: {
		general,
		dss
	},
  plugins: [createPersistedState()], 
})