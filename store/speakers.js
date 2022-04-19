export const state =()=>({
    speakers:[],
    total:0
})

export const mutations={
    setSpeakers(state,payload){
        state.speakers = payload
    },
    setTotalSpeakers(state,payload){
        state.total = payload
    }
}

export const actions={
    async getSpeakers({commit},payload){
        await this.$axios.get('api/admin/speakers').then((res)=>{
            commit('setSpeakers',res.data)
        })
    },
    async getSpeakers({commit},payload){
        await this.$axios.get('api/admin/speakers/totalspeaker').then((res)=>{
            commit('setTotalSpeakers',res.data)
        })
    }
}