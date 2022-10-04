<template>
  <Story
    title="RButton"
    :layout="{
      type: 'grid'
    }"
  >
    <Variant title="Primary">
      <RButton>Test </RButton>
    </Variant>
    <Variant title="Test">
      <RButton>Test </RButton>
    </Variant>
  </Story>
</template>
<script setup>
import RButton from '~/components/RButton.vue'
</script>
