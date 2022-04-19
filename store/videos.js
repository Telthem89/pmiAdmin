export const state =()=>({
    videos:[],
    total:0
})

export const mutations={
    setVideos(state,payload){
        state.videos = payload
    },
    setTotalVideos(state,payload){
        state.total = payload
    }
}

export const actions={
    async getVideos({commit},payload){
        await this.$axios.get('api/admin/videos').then((res)=>{
            commit('setVideos',res.data)
        })
    },
    async getTotalVideos({commit},payload){
        await this.$axios.get('api/admin/videos/totalvideo').then((res)=>{
            commit('setTotalVideos',res.data)
        })
    }
}