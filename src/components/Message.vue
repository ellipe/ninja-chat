<template>
  <v-form
    ref="message_form"
    @submit.prevent="addMessage"
    class="message"
    lazy-validation
  >
    <v-text-field
      single-line
      type="text"
      label="Enter your message"
      name="new-message"
      v-model="message"
      :rules="messageRules"
    />
  </v-form>
</template>

<script>
import db from '../firebase/init'
export default {
  name: 'Message',
  props: ['name'],
  data() {
    return {
      message: null,
      feedback: null,
      messageRules: [
        value => !!value || 'This field is required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }
  },
  methods: {
    addMessage() {
      if (this.$refs.message_form.validate()) {
        db.collection('messages')
          .add({
            message: this.message,
            name: this.name,
            timestamp: Date.now(),
          })
          .catch(err => {
            console.log('Err', err)
          })
        this.message = null
        this.feedback = null
      }
    },
  },
}
</script>

<style scoped>
.message {
  width: 100%;
}
</style>
