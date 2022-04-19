export const state =()=>({
    hotels:[],
    total:0
})

export const mutations={
    setReservations(state,payload){
        state.hotels = payload
    },
    setTotalReservations(state,payload){
        state.total = payload
    }
}

export const actions={
    async getReservations({commit},payload){
        await this.$axios.get('api/admin/hotelreservation').then((res)=>{
            commit('setReservations',res.data)

            
        })
    },
     async getTotalReservations({commit},payload){
        await this.$axios.get('api/admin/hotelreservation/totalhotel').then((res)=>{
            commit('setTotalReservations',res.data)

            
        })
    }
}