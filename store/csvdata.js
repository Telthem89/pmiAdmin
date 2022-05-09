export const state =()=>({
    customercsvs:[],
})

export const mutations={
    setCustomercsv(state,payload){
        state.customercsvs = payload
    },
}

export const actions={
    async getCustomercsv({commit},payload){
        await this.$axios.get('api/admin/csvupload').then((res)=>{
            commit('setCustomercsv',res.data)
            console.log(res.data)
        })
    },
}