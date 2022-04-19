export const state =()=>({
    customers:[],
    total:0
})

export const mutations={
    setCustomers(state,payload){
        state.customers = payload
    },
    setTotalCustomers(state,payload){
        state.total = payload
    }
}

export const actions={
    async getCustomers({commit},payload){
        await this.$axios.get('api/admin/customers').then((res)=>{
            commit('setCustomers',res.data)
        })
    },
    async getTotalCustomers({commit},payload){
        await this.$axios.get('api/admin/customers/totaluser').then((res)=>{
            commit('setTotalCustomers',res.data)
        })
    }
}