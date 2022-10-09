<template>
  <div class="my-10">
    <div class="text-2xl font-semibold">
      <slot v-if="$slots.title" name="title"></slot>
      <template v-else>
        {{ title }}
      </template>
    </div>
    <div class="my-3">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
const props = withDefaults(defineProps<{ title: string }>(), {
  title: ''
})
</script>

<style scoped></style>
