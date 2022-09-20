<template>
  <HelloWorld />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
})
</script>
