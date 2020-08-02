<template>
  <v-container>
    <v-row align="start" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-text>
            <span class="name primary--text">Name</span>
            <span class="message secondary--text"> message</span>
            <span class="datetime">datetime</span>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <message :name="name" />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Message from './Message.vue'
export default {
  name: 'Chat',
  props: ['name'],
  components: {
    Message,
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.name {
  font-size: 1.4em;
}
.message {
  font-size: 1.1em;
}
.datetime {
  display: block;
  font-size: 0.8em;
}
</style>
