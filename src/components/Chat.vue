<template>
  <v-container>
    <v-row align="start" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-text>
            <ul class="messages" ref="messages">
              <li v-for="message in messages" :key="message.id">
                <span class="name primary--text"> {{ message.name }}</span>
                <span class="message secondary--text">{{
                  message.message
                }}</span>
                <span class="datetime">{{ message.timestamp }}</span>
              </li>
            </ul>
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
import db from '../firebase/init'
import moment from 'moment'
import Message from './Message.vue'
export default {
  name: 'Chat',
  props: ['name'],
  components: {
    Message,
  },
  data() {
    return {
      messages: [],
    }
  },
  methods: {
    scrollToLastEntry() {
      const container = this.$el.querySelector('.messages'),
        elem = this.$el.querySelector('.messages > li:last-child') || 999999999

      this.$vuetify.goTo(elem, {
        duration: 1000,
        container,
      })
    },
  },
  created() {
    let ref = db.collection('messages').orderBy('timestamp')
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          let doc = change.doc
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            message: doc.data().message,
            timestamp: moment(doc.data().timestamp).format('lll'),
          })
        }
      })
      this.scrollToLastEntry()
    })
  },
}
</script>

<style scoped>
.name {
  font-size: 2em;
  margin-right: 0.3em;
}
.message {
  font-size: 1.2em;
}
.datetime {
  display: block;
  font-size: 0.8em;
  margin-bottom: 10px;
}

.messages {
  max-height: 75vh;
  overflow: auto;
}
</style>
