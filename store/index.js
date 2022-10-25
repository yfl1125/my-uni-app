import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		hh: '666',
		carts: JSON.parse(uni.getStorageSync('carts') || '[]')
	},
	getters: {

	},
	mutations: {
		setCarts(state) {
			uni.setStorageSync('carts', JSON.stringify(state.carts))
		},
		add(state, obj) {
			var index = state.carts.findIndex(item => {
				return item.id == obj.id
			})
			if (index == -1) {
				state.carts.push(obj)
			} else {
				state.carts[index].num++
			}
			this.commit('setCarts')
		},
		change(state, index) {
			state.carts[index].flag = !state.carts[index].flag
			// console.log(546);
			this.commit('setCarts')
		},
		del(state, index) {
			state.carts.splice(index, 1)
			this.commit('setCarts')
		}
	},
	actions: {

	},
	modules: {

	}


})
