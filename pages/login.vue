<template>
   <v-container>
       <v-row class="mt-5 justify-center">
           <v-col md="6">
               <div class="d-flex justify-center">
              <img src="/logo.png" width="140"/>
               </div>
               <v-card class="mt-4"
               style="border: 2px solid purple;padding:10px!important; border-top-right-radius:30px!important;
                border-bottom-left-radius:30px!important">
                   <v-card-text>
                       <v-form v-model="valid" ref="form" lazy-validation>
                      <v-text-field
                            label="Username"
                            outlined
                            v-model="form.username"
                            :rules="usernameRule"
                        />
                         <v-text-field
                            v-model="form.password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[passwordrules.required, passwordrules.min]"
                            :type="show1 ? 'text' : 'password'"
                            name="input-10-1"
                            label="Password"
                            hint="At least 8 characters"
                            counter
                            outlined
                            @click:append="show1 = !show1"
                        />
                        <v-btn class="indigo darken-4 white--text"  large depressed block @click="submit" :loading="loading" :disabled="loading">Sign In</v-btn>
                       </v-form>
                   </v-card-text>
               </v-card>
           </v-col>
       </v-row>
        <v-snackbar
      absolute
      :color="color"
      right
      top
      v-model="snackbar"
    >{{text}}</v-snackbar>
   </v-container>
</template>

<script>
export default {
 auth:false,
 data(){
     return{
        show1: false,
        form:{
        password: '',
        username:''
        },
        passwordrules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters'
        },
        usernameRule:[v=>!!v || 'Required'],
        valid:false,
        loading:false,
        color:"",
        snackbar:false,
        text:""
     }
 },methods:{
    async submit(){
         if(this.$refs.form.validate()){
          this.valid = true
           this.loading=true
            try {
               await this.$auth.loginWith('local', { data: this.form })
                this.loading = false
                 this.color="success"
                this.snackbar=true
                this.text="Successfully Logged In.Welcome :"+this.form.username
                this.$router.push('dashboard')
               
                 
            } catch (err) {
                
                this.text=err.response.data.message
                 this.loading = false
                 this.color="error"
                this.snackbar=true
            }
         }
     }
 }
}
</script>

<style>

</style>