<template>
  <div class="flex">
    hello world
  </div>
</template>
<script setup lang="ts">
import { Variant } from '~/types/variant'

interface Props {
  variant?: Variant
}

const { variant = Variant.PRIMARY } = defineProps<Props>()

</script>

<style scoped></style>
