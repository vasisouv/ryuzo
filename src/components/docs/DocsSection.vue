<template>
  <div class="my-12">
    <div class="mb-4 text-xl font-semibold">
      <slot v-if="$slots.title" name="title"></slot>
      <template v-else>
        {{ title }}
      </template>
    </div>
    <div class="border border-gray-200 p-6 rounded-lg">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
withDefaults(defineProps<{ title: string }>(), {
  title: ''
})
</script>

<style scoped></style>
