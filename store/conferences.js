export const state =()=>({
    list:[],
    conferencesessions:[],
    total:0
})

export const mutations={
    setConferences(state,payload){
        state.list = payload
    },

    setConferencesessions(state,payload){
        state.conferencesessions = payload
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

 async getConferencesessions({commit},payload){
        await this.$axios.get('api/admin/eventsessions/all/'+payload).then((res)=>{
            commit('setConferencesessions',res.data)
            console.log(res.data)
        })
    },





    async getTotalConferences({commit},payload){
        await this.$axios.get('api/admin/events/total').then((res)=>{
            commit('setTotalConferences',res.data)
        })
    },

    
}