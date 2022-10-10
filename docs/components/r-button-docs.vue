<template>
  <div>
    <DocsSection title="Variants">
      <DocsSectionFlexContainer>
        <RButton variant="primary">Primary</RButton>
        <RButton variant="light">Light</RButton>
        <RButton variant="success">Success</RButton>
        <RButton variant="warning">Warning</RButton>
        <RButton variant="danger">Danger</RButton>
      </DocsSectionFlexContainer>
    </DocsSection>
    <DocsSection title="Sizes">
      <DocsSectionFlexContainer>
        <RButton size="xs">Extra small</RButton>
        <RButton size="sm">Small</RButton>
        <RButton size="base">Base</RButton>
        <RButton size="lg">Large</RButton>
        <RButton size="xl">Extra large</RButton>
      </DocsSectionFlexContainer>
    </DocsSection>
  </div>
</template>
<script setup lang="ts">
import RButton from '~/components/RButton.vue'
import DocsSection from '~/components/docs/DocsSection.vue'
import DocsSectionFlexContainer from '~/components/docs/DocsSectionFlexContainer.vue'
</script>

<style scoped></style>
