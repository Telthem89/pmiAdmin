export const state =()=>({
    games:[]
})

export const mutations={
    setGames(state,payload){
        state.games = payload
    }
}

export const actions={
    async getGames({commit},payload){
        await this.$axios.get('api/admin/gamefications').then((res)=>{
            commit('setGames',res.data)
        })
    }
}