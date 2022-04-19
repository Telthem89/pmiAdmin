export const state =()=>({
    list:[],
    total:0
})

export const mutations={
    setChapters(state,payload){
        state.list = payload
    },
    setTotalChapters(state,payload){
        state.total = payload
    }
}

export const actions={
    async getChapters({commit},payload){
        await this.$axios.get('api/admin/presentations').then((res)=>{
            commit('setChapters',res.data)
        })
    },
    async getTotalChapters({commit},payload){
        await this.$axios.get('api/admin/presentations/total').then((res)=>{
            commit('setTotalChapters',res.data)
        })
    }
}