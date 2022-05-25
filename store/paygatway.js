export const state =()=>({
    allgateways:[],
})

export const mutations={
    setPaymentGateways(state,payload){
        state.allgateways = payload
    },  
}

export const actions={
    async getPaymentGateways({commit},payload){
        await this.$axios.get('api/admin/paymentgateways').then((res)=>{
            commit('setPaymentGateways',res.data)
        })
    },

}