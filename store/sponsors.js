export const state =()=>({
    companies:[]
})

export const mutations={
    setCompanies(state,payload){
        state.companies = payload
    }
}

export const actions={
    async getCompanies({commit},payload){
        await this.$axios.get('api/admin/sponsors').then((res)=>{
            commit('setCompanies',res.data)
        })
    }
}