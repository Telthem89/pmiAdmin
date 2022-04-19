export const state =()=>({
    payments:[],
    total:0
})

export const mutations={
    setPayments(state,payload){
        state.payments = payload
    },

    setTotalPayments(state,payload){
        state.total = payload
    },

    
}

export const actions={
    async getPayments({commit},payload){
        await this.$axios.get('api/admin/payments').then((res)=>{
            commit('setPayments',res.data)
        })
    },

    async getTotalPayments({commit},payload){
        await this.$axios.get('api/admin/payments/getsum').then((res)=>{
            commit('setTotalPayments',res.data)

            console.log(res.data)
        })
    },

    
}