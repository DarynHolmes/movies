<script setup lang="ts">
import { useQuery, keepPreviousData } from '@tanstack/vue-query'
import { getMovies } from '@/api/movies'
import MovieCard from '@/components/movie/MovieCard.vue'
import PaginationControls from '@/components/pagination/PaginationControls.vue'
import AlertCard from '@/components/alert/AlertCard.vue'
import { computed, ref, watch } from 'vue'
import { refDebounced } from '@vueuse/core'

const SEARCH_DEBOUNCE = 700
const PAGE_SIZE = 12

const queryText = ref('')
const currentPage = ref(1)
const queryTextDebounced = refDebounced(queryText, SEARCH_DEBOUNCE)

watch(queryTextDebounced, () => (currentPage.value = 1))

const { data, isError, isFetching, isPlaceholderData, refetch } = useQuery({
  queryKey: computed(() => ['movies', queryTextDebounced.value.trim(), currentPage.value]),
  queryFn: () =>
    getMovies({
      query: queryText.value || '',
      skip: (currentPage.value - 1) * PAGE_SIZE,
      limit: PAGE_SIZE,
    }),
  placeholderData: keepPreviousData,
})
</script>

<template>
  <main>
    <div class="container mx-auto mt-5">
      <div>
        <input
          v-model="queryText"
          class="border border-gray-800 py-2 px-3 rounded-md w-full max-w-sm mx-auto block"
          type="text"
          placeholder="Search..."
        />
        <div v-if="isFetching && !data" class="mt-10 text-center text-gray-500 tracking-widest">
          Loading...
        </div>
        <AlertCard
          v-else-if="isError && !isFetching"
          title="Error"
          message="There was an error loading movies"
          @retry="refetch"
        />

        <div v-else-if="data">
          <PaginationControls
            v-model="currentPage"
            :totalPages="Math.ceil(data.total / PAGE_SIZE)"
          />
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10"
          >
            <MovieCard
              v-for="movie in data.items"
              :key="movie.id"
              :movie="movie"
              :is-placeholder-data="isPlaceholderData"
            />
          </div>
          <div
            v-if="data.items.length === 0"
            class="mt-10 text-center text-gray-500 tracking-widest"
          >
            No matching movies were found...
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
