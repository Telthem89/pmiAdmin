export const state =()=>({
    list:[],
    total:0
})

export const mutations={
    setConferences(state,payload){
        state.list = payload
    },

    setTotalConferences(state,payload){
        state.total = payload
    }
}

export const actions={
    async getConferences({commit},payload){
        await this.$axios.get('api/admin/events').then((res)=>{
            commit('setConferences',res.data)
        })
    },

    async getTotalConferences({commit},payload){
        await this.$axios.get('api/admin/events/total').then((res)=>{
            commit('setTotalConferences',res.data)
        })
    },

    
}