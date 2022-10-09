<template>
  <div>
    <DocsSection title="Variants">
      <div class="flex gap-3">
        <RButton variant="primary">Primary</RButton>
        <RButton variant="light">Primary</RButton>
        <RButton variant="success">Primary</RButton>
        <RButton variant="warning">Primary</RButton>
        <RButton variant="danger">Primary</RButton>
      </div>
    </DocsSection>
    <DocsSection title="Sizes">
      <div class="flex gap-3 items-baseline">
        <RButton size="xs">Extra small</RButton>
        <RButton size="sm">Small</RButton>
        <RButton size="base">Base</RButton>
        <RButton size="lg">Large</RButton>
        <RButton size="xl">Extra large</RButton>
      </div>
    </DocsSection>
  </div>
</template>
<script setup lang="ts">
import RButton from '~/components/RButton.vue'
import DocsSection from '~/components/docs/DocsSection.vue'
</script>

<style scoped></style>
