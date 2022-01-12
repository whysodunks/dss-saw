export default{
	state: {
		alternatif: {
			l1: 'Level 21',
    	l2: 'Trans Studio Mart',
    	l3: 'Sidewalk',
    	l4: 'Beachwalk',
    	l5: 'Mall Bali Galeria'
		},
		persen:{
    	c1: 20,
    	c2: 20,
    	c3: 30,
    	c4: 20,
    	c5: 10
    },
    c1:{
    	l1: 0.8,
    	l2: 1,
    	l3: 0.7,
    	l4: 0.9,
    	l5: 1
    },
    c2:{
    	l1: 0.7,
    	l2: 0.8,
    	l3: 0.6,
    	l4: 0.8,
    	l5: 0.8
    },
    c3:{
    	l1: 1,
    	l2: 0.6,
    	l3: 0.6,
    	l4: 0.7,
    	l5: 0.7
    },
    c4:{
    	l1: 0.9,
    	l2: 0.8,
    	l3: 0.7,
    	l4: 0.8,
    	l5: 0.9
    },
    c5:{
    	l1: 0.7,
    	l2: 0.7,
    	l3: 0.6,
    	l4: 0.7,
    	l5: 0.7
    },
	},
	getters: {
		getAlternatif(state){
			return state.alternatif
		},
		getPersen(state){
			return state.persen
		},
		getC1(state){
			return state.c1
		},
		getC2(state){
			return state.c2
		},
		getC3(state){
			return state.c3
		},
		getC4(state){
			return state.c4
		},
		getC5(state){
			return state.c5
		},
	},
	mutations: {
		setAlternatif(state, payload){
			state.alternatif = payload
		},
		setPersen(state, payload){
			state.persen = payload
		},
		setC1(state, payload){
			state.c1 = payload
		},
		setC2(state, payload){
			state.c2 = payload
		},
		setC3(state, payload){
			state.c3 = payload
		},
		setC4(state, payload){
			state.c4 = payload
		},
		setC5(state, payload){
			state.c5 = payload
		},
	}
}