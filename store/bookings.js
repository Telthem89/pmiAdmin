export const state =()=>({
    list:[],
    hotelbooks:[],
    totalBookingReservation:0
})

export const mutations={
    setConferenceBooking(state,payload){
        state.list = payload
    },

    setHotelBooking(state,payload){
        state.hotelbooks = payload
    },
    setTotalHotelBooking(state,payload){
        state.totalBookingReservation = payload
    }
}

export const actions={
    async getConferenceBooking({commit},payload){
        await this.$axios.get('api/admin/attendance').then((res)=>{
            commit('setConferenceBooking',res.data)
        })
    },

    async getHotelBooking({commit},payload){
        await this.$axios.get('api/admin/bookhotel').then((res)=>{
            commit('setHotelBooking',res.data)
        })
    },

     async getTotalHotelBooking({commit},payload){
        await this.$axios.get('api/admin/bookhotel/total').then((res)=>{
            commit('setTotalHotelBooking',res.data)
        })
    }


}