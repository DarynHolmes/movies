<script setup lang="ts">
import type { Movie } from '@/api/movies'
import { cn } from '@/lib/utils'
defineProps<{
  movie: Movie
  isPlaceholderData?: boolean
}>()
</script>

<template>
  <div
    :class="
      cn(
        'bg-white',
        'p-4',
        'rounded-md',
        'shadow-md',
        'hover:shadow-xl',
        'transition-all',
        'space-y-2',
        isPlaceholderData && 'opacity-25',
      )
    "
  >
    <p class="text-center tracking-wider text-lg text-gray-900">{{ movie.title }}</p>
    <div class="relative">
      <img
        :class="cn('max-h-52', 'min-h-52', 'object-cover', 'w-full', 'rounded-md')"
        :src="movie.image_url"
        :alt="`Poster for ${movie.title}`"
      />
      <div
        class="bg-gray-400 w-10 h-10 flex items-center justify-center text-sm rounded-full text-white absolute top-3 right-3 shadow-xl"
      >
        {{ movie.rating.toFixed(1) }}
      </div>
    </div>
    <!-- <div class="flex justify-between items-center"> -->
    <p class="text-gray-500">{{ movie.description }}</p>
    <!-- </div> -->
  </div>
</template>
