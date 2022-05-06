<template>
	<v-container>
    <v-row>
      <v-col>
        <v-card color="purple">
          <v-card-text class="d-flex" >
            <v-btn text to="dashboard" class="white--text">Dashboard</v-btn>
            <v-btn text disabled class="white--text">Payment Gateways</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
</v-container>
</template>
<script>
export default {
  layout: "user",
}
</script>