

export const state =()=>({
    registrationfee:[],
})

export const mutations={
    setRegistrationfees(state,payload){
        state.registrationfee = payload
    },  
}

export const actions={
    async getRegistrationfeess({commit},payload){
        await this.$axios.get('api/admin/registrationfee').then((res)=>{
            commit('setRegistrationfees',res.data)
        })
    },

}