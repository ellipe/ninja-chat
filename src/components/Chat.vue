<template>
  <v-container>
    <h1>Chat {{ name }}</h1>
  </v-container>
</template>

<script>
export default {
  name: 'Chat',
  props: ['name'],
  data() {
    return {}
  },
  mounted() {
    console.log('DEBUG:::::::::::::::::::::: mounted', this.$route.params)
  }
}
</script>
