<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed } from 'vue'
const props = defineProps<{
  modelValue: number
  totalPages: number
}>()

defineEmits<{
  (event: 'update:modelValue', value: number): void
}>()

const buttons = computed(() => {
  return [
    {
      label: '<',
      value: props.modelValue - 1,
      current: props.modelValue <= 1,
    },
    {
      label: '>',
      value: props.modelValue + 1,
      current: props.modelValue >= props.totalPages,
    },
  ]
})
</script>

<template>
  <div>
    <div class="flex justify-end gap-5 items-center mt-10">
      <p class="text-sm text-gray-500">Page: {{ modelValue }} / {{ totalPages }}</p>
      <div>
        <button
          v-for="button in buttons"
          :key="button.value"
          :disabled="button.current"
          :class="
            cn(
              [
                'px-4',
                'py-2',
                'mx-2',
                'bg-teal-400',
                'text-gray-100',
                'rounded-md',
                'border',
                'border-teal-400',
              ],
              !button.current && 'hover:text-white hover:bg-teal-500 active:bg-teal-600',
              button.current && 'bg-gray-100 text-gray-500 border-gray-400',
            )
          "
          @click="$emit('update:modelValue', button.value)"
        >
          {{ button.label }}
        </button>
      </div>
    </div>
  </div>
</template>
