<script setup lang="ts">
const props = defineProps<{
  title: string
  message: string
}>()

const emit = defineEmits<{
  (event: 'retry'): void
}>()
</script>

<template>
  <div>
    <div
      class="my-5 p-5 border-2 border-amber-300 bg-amber-50 rounded-md flex flex-col gap-5 max-w-sm mx-auto text-gray-800"
    >
      <div>
        <p class="font-bold tracking-wide text-amber-600">{{ props.title }}</p>
        <hr class="text-amber-300 my-2" />
        <p class="text-amber-600">{{ props.message }}</p>
      </div>
      <button
        class="self-end bg-amber-400 hover:bg-amber-500 active:bg-amber-600 py-2 px-3 rounded-md"
        @click="emit('retry')"
      >
        Retry
      </button>
    </div>
  </div>
</template>
