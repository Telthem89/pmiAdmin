export const state =()=>({
    list:[],
    total:0
})

export const mutations={
    setConGroups(state,payload){
        state.list = payload
    },

    setTotalConGroups(state,payload){
        state.total = payload
    },

    
}

export const actions={
    async getConGroups({commit},payload){
        await this.$axios.get('api/admin/confgroups').then((res)=>{
            commit('setConGroups',res.data)
        })
    },

     async getTotalConGroups({commit},payload){
        await this.$axios.get('api/admin/confgroups/total').then((res)=>{
            commit('setTotalConGroups',res.data)
        })
    }
}