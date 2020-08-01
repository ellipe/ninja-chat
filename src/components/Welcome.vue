<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card elevation="12">
          <v-card-title>Welcome!</v-card-title>
          <v-card-subtitle
            >Start chatting with others, just type in your
            name.</v-card-subtitle
          >
          <v-spacer></v-spacer>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Enter your name"
                name="name"
                type="text"
                v-model="name"
              />
            </v-form>
            <p v-if="feedback" class="red--text">{{ feedback }}</p>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" @click="enterChat" min-width="150"
                >Enter</v-btn
              >
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      name: null,
      feedback: null,
    }
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({
          name: 'Chat',
          params: {
            name: this.name,
          },
        })
      }
      this.feedback = 'You must enter a name to join.'
    },
  },
}
</script>
