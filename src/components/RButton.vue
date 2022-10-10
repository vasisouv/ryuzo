<template>
  <component
    :is="tag"
    class="inline-flex items-center border font-medium justify-center focus:outline-none focus:ring-2 focus:ring-offset-2"
    :class="buttonClasses"
    v-bind="attributes"
  >
    <RSpinner v-if="loading" :dark="spinnerIsDark" />
    <span v-else-if="$slots.icon" class="mr-2 h-5 w-5">
      <slot name="icon" />
    </span>
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'

import { Variant } from '~/types/variant'
import { Size } from '~/types/size'
import RSpinner from '~/components/RSpinner.vue'
import { RouteLocationRaw, RouterLink } from 'vue-router'

const props = withDefaults(
  defineProps<{
    type?: string
    size?: Size
    loading?: boolean
    disabled?: boolean
    variant?: Variant
    circle?: boolean
    icon?: boolean
    href?: string
    to?: RouteLocationRaw
  }>(),
  {
    type: 'button',
    size: Size.BASE,
    variant: Variant.PRIMARY,
    loading: false,
    disabled: false,
    circle: false,
    icon: false,
    href: '',
    to: ''
  }
)

const { type, size, variant, loading, disabled, circle, icon, href, to } =
  toRefs(props)

const spinnerIsDark = computed(() => {
  switch (variant.value) {
    case Variant.LIGHT: {
      return true
    }
    default: {
      return false
    }
  }
})

const buttonClasses = computed(() => {
  function shadowClasses() {
    if (icon.value) return []

    return ['shadow-sm']
  }
  function sizeClasses() {
    if (circle.value) return ['px-2', 'py-2']
    else if (icon.value) return ['px-2', 'py-2']

    switch (size.value) {
      case Size.XS: {
        return ['px-2.5', 'py-1.5', 'text-xs']
      }
      case Size.SM: {
        return ['px-3', 'py-2', 'text-sm', 'leading-4']
      }
      case Size.LG: {
        return ['px-4', 'py-2', 'text-base']
      }
      case Size.XL: {
        return ['px-6', 'py-3', 'text-base']
      }
      case Size.BASE:
      default: {
        return ['px-4', 'py-2', 'text-sm']
      }
    }
  }
  function colorClasses() {
    switch (variant.value) {
      case Variant.LIGHT: {
        if (disabled.value) return ['text-gray-500', 'bg-gray-200']

        if (icon.value)
          return ['text-gray-600', 'hover:text-gray-700', 'focus:ring-gray-500']

        return [
          'border-grey-300',
          'bg-white',
          'hover:bg-gray-50',
          'focus:ring-primary-500'
        ]
      }
      case Variant.DANGER: {
        if (disabled.value) return ['text-white', 'bg-red-400']

        if (icon.value)
          return ['text-red-600', 'hover:text-red-700', 'focus:ring-red-500']

        return [
          'text-white',
          'bg-red-600',
          'hover:bg-red-700',
          'focus:ring-red-500'
        ]
      }
      case Variant.WARNING: {
        if (disabled.value) return ['text-gray-500', 'bg-yellow-400']

        if (icon.value) {
          return [
            'text-yellow-600',
            'hover:text-yellow-700',
            'focus:ring-yellow-500'
          ]
        }
        return [
          'text-black',
          'bg-yellow-500',
          'hover:bg-yellow-600',
          'focus:ring-yellow-500'
        ]
      }
      case Variant.SUCCESS: {
        if (disabled.value) return ['text-white', 'bg-green-400']

        if (icon.value) {
          return [
            'text-green-600',
            'hover:text-green-700',
            'focus:ring-green-500'
          ]
        }
        return [
          'text-white',
          'bg-green-600',
          'hover:bg-green-700',
          'focus:ring-green-500'
        ]
      }
      case Variant.PRIMARY:
      default: {
        if (disabled.value) return ['text-white', 'bg-primary-400']

        if (icon.value) {
          return [
            'text-primary-600',
            'hover:text-primary-700',
            'focus:ring-primary-500'
          ]
        }
        return [
          'text-white',
          'bg-primary-600',
          'hover:bg-primary-700',
          'focus:ring-primary-500'
        ]
      }
    }
  }

  function disabledClasses() {
    if (disabled.value) return ['cursor-not-allowed', 'pointer-events-none']

    return []
  }

  function roundedClasses() {
    if (circle.value || icon.value) return ['rounded-full']

    return ['rounded-md']
  }

  return [
    ...sizeClasses(),
    ...colorClasses(),
    ...disabledClasses(),
    ...roundedClasses(),
    ...shadowClasses()
  ]
})

const tag = computed(() => {
  if (to.value) return RouterLink
  else if (href.value) return 'a'

  return 'button'
})

const attributes = computed(() => {
  if (to.value) {
    return {
      to: to.value
    }
  } else if (href.value) {
    return {
      href: href.value
    }
  }
  return {
    disabled: disabled.value,
    type: type.value
  }
})
</script>

<style scoped lang="scss"></style>
